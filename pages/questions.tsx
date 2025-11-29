import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Building2, 
  BookOpen, 
  ChevronRight, 
  ArrowLeft, 
  Search, 
  Calendar, 
  FileText, 
  Book, 
  Lightbulb, 
  GraduationCap,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  availableCount: number;
}

interface Trimester {
  id: string;
  name: string;
  availableCount: number;
  hasData: boolean;
}

interface Course {
  id: string;
  code: string;
  title: string;
  credits: number;
  available: boolean;
}

interface ResourceOverview {
  courseInfo: {
    code: string;
    title: string;
    credits: number;
  };
  resources: {
    questions: { available: boolean; count: number };
    notes: { available: boolean; count: number };
    practice: { available: boolean; count: number };
  };
}

interface QuestionResources {
  available: boolean;
  counts: { classTests: number; midterm: number; final: number };
  items: {
    classTests: Array<{ id: number; title: string; link: string }>;
    midterm: Array<{ id: number; title: string; link: string }>;
    final: Array<{ id: number; title: string; link: string }>;
  };
}

interface NoteResource {
  id: number;
  title: string;
  author: string;
  type: string;
  tag: string;
  link: string;
}

interface PracticeResource {
  id: number;
  title: string;
  type: string;
  tag: string;
  link: string;
}

export default function QuestionsBank() {
  const router = useRouter();
  const { dept, trimester, course, resourceType } = router.query;
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (dept) params.append('dept', dept as string);
        if (trimester) params.append('trimester', trimester as string);
        if (course) params.append('course', course as string);
        if (resourceType) params.append('resourceType', resourceType as string);

        const res = await fetch(`/api/questions?${params.toString()}`);
        if (res.ok) {
          const jsonData = await res.json();
          setData(jsonData);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    setSelectedCategory(null);
  }, [router.isReady, dept, trimester, course, resourceType]);

  const goBack = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
      return;
    }
    if (resourceType) {
      router.push(`/questions?dept=${dept}&trimester=${trimester}&course=${course}`);
    } else if (course) {
      router.push(`/questions?dept=${dept}&trimester=${trimester}`);
    } else if (trimester) {
      router.push(`/questions?dept=${dept}`);
    } else if (dept) {
      router.push('/questions');
    } else {
      router.push('/');
    }
  };

  const getTitle = () => {
    if (selectedCategory) return selectedCategory;
    if (resourceType) {
      if (resourceType === 'questions') return `${course} - Select Question Type`;
      if (resourceType === 'notes') return `${course} - Notes`;
      if (resourceType === 'practice') return `${course} - Practice`;
    }
    if (course) return `${course} - Select Resource Type`;
    if (trimester) return `${dept === 'DEPT' ? 'Departmental' : 'Non-Departmental'} Courses - ${trimester}`;
    if (dept) return 'Departmental Courses';
    return 'Resource Archive';
  };

  const getSubtitle = () => {
    if (selectedCategory) return `Browse available ${selectedCategory.toLowerCase()} questions`;
    if (resourceType) {
      // @ts-ignore
      return data?.courseInfo?.title || 'Data Structures and Algorithms 2 (DSA 2)';
    }
    if (course) {
       // @ts-ignore
       return data?.courseInfo?.title || 'Data Structures and Algorithms 2 (DSA 2)';
    }
    if (trimester) return 'Select a course to view available resources';
    if (dept) return 'Select a trimester to view available courses';
    return 'Access previous exam questions, notes, and practice materials from different courses. Find class tests, midterm, and final exams organized by department type, trimester, and course.';
  };

  // Render Views
  const renderDepartments = () => {
    if (!Array.isArray(data) || (data.length > 0 && !('icon' in data[0]))) return null;
    
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {(data as Department[])?.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card 
            className="cursor-pointer hover:shadow-md transition-all hover:border-primary/50 group h-full"
            onClick={() => router.push(`/questions?dept=${item.id}`)}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {item.icon === 'building' ? <Building2 className="h-6 w-6" /> : <BookOpen className="h-6 w-6" />}
                    </div>
                    <h3 className="font-bold text-xl">{item.name}</h3>
                  </div>
                  
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 uppercase">
                    {item.id}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 text-primary text-sm font-medium group-hover:underline">
                    {item.availableCount} Courses Available
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
  };

  const renderTrimesters = () => {
    if (!Array.isArray(data) || (data.length > 0 && !('availableCount' in data[0]))) return null;

    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {(data as Trimester[])?.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
        >
          <Card 
            className={cn(
              "transition-all hover:border-primary/50 group h-full",
              item.availableCount > 0 ? "cursor-pointer hover:shadow-md" : "opacity-60 cursor-not-allowed bg-muted/30"
            )}
            onClick={() => item.availableCount > 0 && router.push(`/questions?dept=${dept}&trimester=${item.id}`)}
          >
            <CardContent className="p-6">
              <div className="flex flex-col h-full justify-between space-y-4">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Calendar className="h-4 w-4" />
                  <span>{item.name}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className={cn(
                    "font-medium",
                    item.availableCount > 0 ? "text-primary" : "text-muted-foreground"
                  )}>
                    {item.availableCount} {item.availableCount === 1 ? 'Course' : 'Courses'} Available
                  </span>
                  {item.availableCount > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
  };

  const renderCourses = () => {
    if (!Array.isArray(data) || (data.length > 0 && !('title' in data[0]))) return null;

    return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search courses..." 
          className="pl-10 bg-background"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(data as Course[])?.filter(c => 
          c.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
          c.code?.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card 
              className="cursor-pointer hover:shadow-md transition-all hover:border-primary/50 group h-full"
              onClick={() => router.push(`/questions?dept=${dept}&trimester=${trimester}&course=${item.id}`)}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    {trimester}
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-background border-border text-foreground">
                    {item.credits} Credits
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Book className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-lg">{item.code}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 min-h-10">
                  {item.title}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <span className="text-sm text-primary font-medium">
                    1 Trimester Available
                  </span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
  };

  const renderResourceTypes = () => {
    if (!data || !('courseInfo' in data)) return null;
    const info = (data as ResourceOverview);

    return (
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-muted/30 border-none shadow-none">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">Course Information</h3>
                <div className="mt-2 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-background border-border text-foreground">
                  {info.courseInfo.credits} Credits
                </div>
              </div>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground">
                1 Trimester Available
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Questions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card 
              className={cn(
                "transition-all hover:border-primary/50 group h-full",
                info.resources.questions.available ? "cursor-pointer hover:shadow-md" : "opacity-60 cursor-not-allowed"
              )}
              onClick={() => info.resources.questions.available && router.push(`/questions?dept=${dept}&trimester=${trimester}&course=${course}&resourceType=questions`)}
            >
              <CardContent className="p-6 space-y-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg w-fit text-blue-600 dark:text-blue-400">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Questions</h3>
                  <p className="text-sm text-muted-foreground mt-1">Previous exam questions and tests by trimester</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
                    info.resources.questions.available ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  )}>
                    {info.resources.questions.available ? "Available" : "Unavailable"}
                  </div>
                  {info.resources.questions.available && <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card 
              className={cn(
                "transition-all hover:border-primary/50 group h-full",
                info.resources.notes.available ? "cursor-pointer hover:shadow-md" : "opacity-60 cursor-not-allowed"
              )}
              onClick={() => info.resources.notes.available && router.push(`/questions?dept=${dept}&trimester=${trimester}&course=${course}&resourceType=notes`)}
            >
              <CardContent className="p-6 space-y-4">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg w-fit text-green-600 dark:text-green-400">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Notes</h3>
                  <p className="text-sm text-muted-foreground mt-1">Course notes and study materials</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
                    info.resources.notes.available ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  )}>
                    {info.resources.notes.available ? "Available" : "Unavailable"}
                  </div>
                  {info.resources.notes.available && <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Practice */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Card 
              className={cn(
                "transition-all hover:border-primary/50 group h-full",
                info.resources.practice.available ? "cursor-pointer hover:shadow-md" : "opacity-60 cursor-not-allowed"
              )}
              onClick={() => info.resources.practice.available && router.push(`/questions?dept=${dept}&trimester=${trimester}&course=${course}&resourceType=practice`)}
            >
              <CardContent className="p-6 space-y-4">
                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg w-fit text-amber-600 dark:text-amber-400">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Practice</h3>
                  <p className="text-sm text-muted-foreground mt-1">Practice problems and exercises</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
                    info.resources.practice.available ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  )}>
                    {info.resources.practice.available ? "Available" : "Unavailable"}
                  </div>
                  {info.resources.practice.available && <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  };

  const renderQuestionsList = () => {
    if (!data || !('items' in data) || !('classTests' in data.items)) return null;
    const qData = data as QuestionResources;

    const sections = [
      { title: 'Class Tests', icon: FileText, items: qData.items.classTests, count: qData.counts.classTests, color: 'text-blue-600 bg-blue-50' },
      { title: 'Midterm Exams', icon: BookOpen, items: qData.items.midterm, count: qData.counts.midterm, color: 'text-green-600 bg-green-50' },
      { title: 'Final Exams', icon: GraduationCap, items: qData.items.final, count: qData.counts.final, color: 'text-amber-600 bg-amber-50' },
    ];

    if (selectedCategory) {
      const section = sections.find(s => s.title === selectedCategory);
      if (!section) return null;

      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className={cn("p-3 rounded-lg", section.color)}>
              <section.icon className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="text-muted-foreground">
                {section.count} {section.count === 1 ? 'Question' : 'Questions'} Available
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {section.items.length > 0 ? (
              section.items.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="hover:shadow-sm transition-all hover:border-primary/50 group">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-muted rounded-full">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <span className="font-medium group-hover:text-primary transition-colors">{item.title}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-2" asChild>
                        <a href={item.link}>
                          Download <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                No questions available in this category yet.
              </div>
            )}
          </div>
        </motion.div>
      );
    }

    // Default view: 3 Cards
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card 
              className="h-full cursor-pointer hover:shadow-lg transition-all hover:border-primary/50 group hover:-translate-y-1"
              onClick={() => setSelectedCategory(section.title)}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className={cn("p-3 rounded-lg transition-colors", section.color)}>
                    <section.icon className="h-6 w-6" />
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="font-bold text-lg mb-2">{section.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {section.title} questions from all trimesters
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                    Available
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {section.count} {section.count === 1 ? 'Question' : 'Questions'}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  };

  const renderNotesList = () => {
    if (!data || !('items' in data) || !Array.isArray(data.items)) return null;
    const nData = data as { items: NoteResource[] };

    return (
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900 rounded-lg p-4 mb-6"
        >
          <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold mb-1">
            <FileText className="h-5 w-5" />
            {data?.courseInfo?.title || course} Notes
            <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-800 px-2 py-0.5 rounded-full">
              {nData.items.length} Files
            </span>
          </div>
          {nData.items[0] && (
             <div className="flex items-center gap-2 text-sm text-blue-600/80 dark:text-blue-400/80 mt-1">
                <span className="font-bold bg-blue-100 dark:bg-blue-800 px-1.5 rounded text-xs">MMM</span>
                {nData.items[0].author}
             </div>
          )}
        </motion.div>

        {nData.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="hover:shadow-sm transition-shadow group">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-primary transition-colors">{item.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs border px-1.5 py-0.5 rounded bg-muted/50">
                        {item.type}
                      </span>
                      <span className="text-xs bg-green-50 text-green-700 px-1.5 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2 group-hover:border-primary group-hover:text-primary">
                  <ExternalLink className="h-4 w-4" />
                  View
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  };

  const renderPracticeList = () => {
    if (!data || !('items' in data) || !Array.isArray(data.items)) return null;
    const pData = data as { items: PracticeResource[] };

    return (
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900 rounded-lg p-4 mb-6"
        >
          <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold mb-1">
            <FileText className="h-5 w-5" />
            {data?.courseInfo?.title || course} Practice
            <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-800 px-2 py-0.5 rounded-full">
              {pData.items.length} Files
            </span>
          </div>
        </motion.div>

        {pData.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="hover:shadow-sm transition-shadow group">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-primary transition-colors">{item.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs border px-1.5 py-0.5 rounded bg-muted/50">
                        {item.type}
                      </span>
                      <span className="text-xs bg-green-50 text-green-700 px-1.5 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2 group-hover:border-primary group-hover:text-primary">
                  <ExternalLink className="h-4 w-4" />
                  View
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Head>
        <title>Questions Bank | UIU DSC</title>
      </Head>


      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="container py-10 max-w-6xl mx-auto">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4 mb-12"
          >
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <Book className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Questions Bank</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              {getTitle()}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {getSubtitle()}
            </p>
          </motion.div>

          {/* Back Button */}
          {(dept || trimester || course || selectedCategory) && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6"
            >
              <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:pl-2 transition-all">
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
            </motion.div>
          )}

          {/* Content Area */}
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={router.asPath + (selectedCategory || '')}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {!dept && renderDepartments()}
                {dept && !trimester && renderTrimesters()}
                {dept && trimester && !course && renderCourses()}
                {dept && trimester && course && !resourceType && renderResourceTypes()}
                {dept && trimester && course && resourceType === 'questions' && renderQuestionsList()}
                {dept && trimester && course && resourceType === 'notes' && renderNotesList()}
                {dept && trimester && course && resourceType === 'practice' && renderPracticeList()}
              </motion.div>
            </AnimatePresence>
          )}

        </div>
      </main>
    </div>
  );
}
