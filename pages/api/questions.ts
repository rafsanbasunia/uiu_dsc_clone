import type { NextApiRequest, NextApiResponse } from 'next';

// Dummy Data
const db = {
  departments: [
    {
      id: 'DEPT',
      name: 'Departmental Courses',
      description: 'Core departmental courses including Data Science, Computer Science, and Mathematics',
      icon: 'building',
      availableCount: 9,
      trimesters: [
        {
          id: 'Trimester 1',
          name: 'Trimester 1',
          availableCount: 3,
          courses: [
            {
              id: 'CSE 2217',
              code: 'CSE 2217',
              title: 'Data Structures and Algorithms 2 (DSA 2)',
              credits: 3,
              resources: {
                questions: {
                  available: true,
                  counts: { classTests: 6, midterm: 3, final: 2 },
                  items: {
                    classTests: [
                      { id: 1, title: 'CT 1 - Spring 2024', link: '#' },
                      { id: 2, title: 'CT 2 - Spring 2024', link: '#' },
                      { id: 3, title: 'CT 1 - Fall 2023', link: '#' },
                      { id: 4, title: 'CT 2 - Fall 2023', link: '#' },
                      { id: 5, title: 'CT 1 - Summer 2023', link: '#' },
                      { id: 6, title: 'CT 2 - Summer 2023', link: '#' },
                    ],
                    midterm: [
                      { id: 1, title: 'Midterm - Spring 2024', link: '#' },
                      { id: 2, title: 'Midterm - Fall 2023', link: '#' },
                      { id: 3, title: 'Midterm - Summer 2023', link: '#' },
                    ],
                    final: [
                      { id: 1, title: 'Final - Fall 2023', link: '#' },
                      { id: 2, title: 'Final - Summer 2023', link: '#' },
                    ]
                  }
                },
                notes: {
                  available: true,
                  count: 5,
                  items: [
                    { id: 1, title: 'Chapter 1: Introduction to Graphs', author: 'Meherun Mehnaj Miti', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 2, title: 'Chapter 2: BFS and DFS', author: 'Meherun Mehnaj Miti', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 3, title: 'Chapter 3: Dijkstra Algorithm', author: 'Meherun Mehnaj Miti', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 4, title: 'Chapter 4: Dynamic Programming', author: 'Meherun Mehnaj Miti', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 5, title: 'Chapter 5: Greedy Algorithms', author: 'Meherun Mehnaj Miti', type: 'PDF Document', tag: 'Lecture Note', link: '#' }
                  ]
                },
                practice: {
                  available: true,
                  count: 6,
                  items: [
                    { id: 1, title: 'Graph Theory Practice Problems', type: 'PDF Document', tag: 'Problem Set', link: '#' },
                    { id: 2, title: 'Dynamic Programming Sheet', type: 'PDF Document', tag: 'Problem Set', link: '#' },
                    { id: 3, title: 'Greedy Algorithm Challenges', type: 'PDF Document', tag: 'Problem Set', link: '#' },
                    { id: 4, title: 'Previous Year Solve - Spring 23', type: 'PDF Document', tag: 'Solution', link: '#' },
                    { id: 5, title: 'Previous Year Solve - Fall 22', type: 'PDF Document', tag: 'Solution', link: '#' },
                    { id: 6, title: 'Mock Test Question', type: 'PDF Document', tag: 'Mock Test', link: '#' }
                  ]
                }
              }
            },
            {
              id: 'DS 3885',
              code: 'DS 3885',
              title: 'Data Wrangling',
              credits: 3,
              resources: {
                questions: { available: true, counts: { classTests: 2, midterm: 1, final: 1 }, items: { 
                    classTests: [{ id: 1, title: 'CT 1 - Spring 2024', link: '#' }, { id: 2, title: 'CT 2 - Spring 2024', link: '#' }], 
                    midterm: [{ id: 1, title: 'Midterm - Spring 2024', link: '#' }], 
                    final: [{ id: 1, title: 'Final - Fall 2023', link: '#' }] 
                } },
                notes: { available: true, count: 3, items: [
                    { id: 1, title: 'Data Cleaning Techniques', author: 'Dr. Swakkhar Shatabda', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 2, title: 'Pandas Advanced', author: 'Dr. Swakkhar Shatabda', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 3, title: 'Data Visualization', author: 'Dr. Swakkhar Shatabda', type: 'PDF Document', tag: 'Lecture Note', link: '#' }
                ] },
                practice: { available: true, count: 2, items: [
                    { id: 1, title: 'Kaggle Titanic Dataset Practice', type: 'Link', tag: 'Project', link: '#' },
                    { id: 2, title: 'Housing Price Prediction', type: 'Link', tag: 'Project', link: '#' }
                ] }
              }
            },
            {
              id: 'Math 2205',
              code: 'Math 2205',
              title: 'Probability and Statistics',
              credits: 3,
              resources: {
                questions: { available: true, counts: { classTests: 2, midterm: 1, final: 1 }, items: { 
                    classTests: [{ id: 1, title: 'CT 1 - Spring 2024', link: '#' }, { id: 2, title: 'CT 2 - Spring 2024', link: '#' }], 
                    midterm: [{ id: 1, title: 'Midterm - Spring 2024', link: '#' }], 
                    final: [{ id: 1, title: 'Final - Fall 2023', link: '#' }] 
                } },
                notes: { available: true, count: 5, items: [
                    { id: 1, title: 'Probability Axioms', author: 'Faculty', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 2, title: 'Random Variables', author: 'Faculty', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 3, title: 'Distributions', author: 'Faculty', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 4, title: 'Hypothesis Testing', author: 'Faculty', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 5, title: 'Regression Analysis', author: 'Faculty', type: 'PDF Document', tag: 'Lecture Note', link: '#' }
                ] },
                practice: { available: true, count: 2, items: [
                    { id: 1, title: 'Practice Sheet 1', type: 'PDF Document', tag: 'Problem Set', link: '#' },
                    { id: 2, title: 'Practice Sheet 2', type: 'PDF Document', tag: 'Problem Set', link: '#' }
                ] }
              }
            }
          ]
        },
        {
          id: 'Trimester 5',
          name: 'Trimester 5',
          availableCount: 3,
          courses: [
            {
              id: 'CSE 2217',
              code: 'CSE 2217',
              title: 'Data Structures and Algorithms 2 (DSA 2)',
              credits: 3,
              resources: {
                questions: {
                  available: true,
                  counts: { classTests: 6, midterm: 3, final: 2 },
                  items: {
                    classTests: [
                      { id: 1, title: 'CT 1 - Spring 2024', link: '#' },
                      { id: 2, title: 'CT 2 - Spring 2024', link: '#' },
                      { id: 3, title: 'CT 1 - Fall 2023', link: '#' },
                      { id: 4, title: 'CT 2 - Fall 2023', link: '#' },
                      { id: 5, title: 'CT 1 - Summer 2023', link: '#' },
                      { id: 6, title: 'CT 2 - Summer 2023', link: '#' },
                    ],
                    midterm: [
                      { id: 1, title: 'Midterm - Spring 2024', link: '#' },
                      { id: 2, title: 'Midterm - Fall 2023', link: '#' },
                      { id: 3, title: 'Midterm - Summer 2023', link: '#' },
                    ],
                    final: [
                      { id: 1, title: 'Final - Fall 2023', link: '#' },
                      { id: 2, title: 'Final - Summer 2023', link: '#' },
                    ]
                  }
                },
                notes: {
                  available: true,
                  count: 5,
                  items: [
                    { id: 1, title: 'Chapter 1: Introduction to Graphs', author: 'Meherun Mehnaj Miti', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 2, title: 'Chapter 2: BFS and DFS', author: 'Meherun Mehnaj Miti', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 3, title: 'Chapter 3: Dijkstra Algorithm', author: 'Meherun Mehnaj Miti', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 4, title: 'Chapter 4: Dynamic Programming', author: 'Meherun Mehnaj Miti', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 5, title: 'Chapter 5: Greedy Algorithms', author: 'Meherun Mehnaj Miti', type: 'PDF Document', tag: 'Lecture Note', link: '#' }
                  ]
                },
                practice: {
                  available: true,
                  count: 6,
                  items: [
                    { id: 1, title: 'Graph Theory Practice Problems', type: 'PDF Document', tag: 'Problem Set', link: '#' },
                    { id: 2, title: 'Dynamic Programming Sheet', type: 'PDF Document', tag: 'Problem Set', link: '#' },
                    { id: 3, title: 'Greedy Algorithm Challenges', type: 'PDF Document', tag: 'Problem Set', link: '#' },
                    { id: 4, title: 'Previous Year Solve - Spring 23', type: 'PDF Document', tag: 'Solution', link: '#' },
                    { id: 5, title: 'Previous Year Solve - Fall 22', type: 'PDF Document', tag: 'Solution', link: '#' },
                    { id: 6, title: 'Mock Test Question', type: 'PDF Document', tag: 'Mock Test', link: '#' }
                  ]
                }
              }
            },
            {
              id: 'DS 3885',
              code: 'DS 3885',
              title: 'Data Wrangling',
              credits: 3,
              resources: {
                questions: { available: true, counts: { classTests: 2, midterm: 1, final: 1 }, items: { 
                    classTests: [{ id: 1, title: 'CT 1 - Spring 2024', link: '#' }, { id: 2, title: 'CT 2 - Spring 2024', link: '#' }], 
                    midterm: [{ id: 1, title: 'Midterm - Spring 2024', link: '#' }], 
                    final: [{ id: 1, title: 'Final - Fall 2023', link: '#' }] 
                } },
                notes: { available: true, count: 3, items: [
                    { id: 1, title: 'Data Cleaning Techniques', author: 'Dr. Swakkhar Shatabda', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 2, title: 'Pandas Advanced', author: 'Dr. Swakkhar Shatabda', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 3, title: 'Data Visualization', author: 'Dr. Swakkhar Shatabda', type: 'PDF Document', tag: 'Lecture Note', link: '#' }
                ] },
                practice: { available: true, count: 2, items: [
                    { id: 1, title: 'Kaggle Titanic Dataset Practice', type: 'Link', tag: 'Project', link: '#' },
                    { id: 2, title: 'Housing Price Prediction', type: 'Link', tag: 'Project', link: '#' }
                ] }
              }
            },
            {
              id: 'Math 2205',
              code: 'Math 2205',
              title: 'Probability and Statistics',
              credits: 3,
              resources: {
                questions: { available: true, counts: { classTests: 2, midterm: 1, final: 1 }, items: { 
                    classTests: [{ id: 1, title: 'CT 1 - Spring 2024', link: '#' }, { id: 2, title: 'CT 2 - Spring 2024', link: '#' }], 
                    midterm: [{ id: 1, title: 'Midterm - Spring 2024', link: '#' }], 
                    final: [{ id: 1, title: 'Final - Fall 2023', link: '#' }] 
                } },
                notes: { available: true, count: 5, items: [
                    { id: 1, title: 'Probability Axioms', author: 'Faculty', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 2, title: 'Random Variables', author: 'Faculty', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 3, title: 'Distributions', author: 'Faculty', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 4, title: 'Hypothesis Testing', author: 'Faculty', type: 'PDF Document', tag: 'Lecture Note', link: '#' },
                    { id: 5, title: 'Regression Analysis', author: 'Faculty', type: 'PDF Document', tag: 'Lecture Note', link: '#' }
                ] },
                practice: { available: true, count: 2, items: [
                    { id: 1, title: 'Practice Sheet 1', type: 'PDF Document', tag: 'Problem Set', link: '#' },
                    { id: 2, title: 'Practice Sheet 2', type: 'PDF Document', tag: 'Problem Set', link: '#' }
                ] }
              }
            }
          ]
        }
      ]
    },
    {
      id: 'NON_DEPT',
      name: 'Non-Departmental Courses',
      description: 'General courses not specific to any department - language, soft skills, etc.',
      icon: 'book-open',
      availableCount: 9,
      trimesters: []
    }
  ]
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { dept, trimester, course, resourceType } = req.query;

  // 1. Root: Return Departments
  if (!dept) {
    return res.status(200).json(db.departments.map(d => ({
      id: d.id,
      name: d.name,
      description: d.description,
      icon: d.icon,
      availableCount: d.availableCount
    })));
  }

  const selectedDept = db.departments.find(d => d.id === dept);
  if (!selectedDept) return res.status(404).json({ message: 'Department not found' });

  if (!trimester) {

    const allTrimesters = Array.from({ length: 12 }, (_, i) => {
      const id = `Trimester ${i + 1}`;
      const existing = selectedDept.trimesters.find(t => t.id === id);
      return {
        id,
        name: id,
        availableCount: existing ? existing.availableCount : 0,
        hasData: !!existing
      };
    });
    return res.status(200).json(allTrimesters);
  }

  const selectedTrimester = selectedDept.trimesters.find(t => t.id === trimester);

  if (!selectedTrimester) return res.status(200).json([]);

  if (!course) {
    return res.status(200).json(selectedTrimester.courses.map(c => ({
      id: c.id,
      code: c.code,
      title: c.title,
      credits: c.credits,
      available: true 
    })));
  }

  const selectedCourse = selectedTrimester.courses.find(c => c.id === course);
  if (!selectedCourse) return res.status(404).json({ message: 'Course not found' });

  if (!resourceType) {
    return res.status(200).json({
      courseInfo: {
        code: selectedCourse.code,
        title: selectedCourse.title,
        credits: selectedCourse.credits
      },
      resources: {
        questions: { available: selectedCourse.resources.questions.available, count: Object.values(selectedCourse.resources.questions.counts).reduce((a, b) => a + b, 0) },
        notes: { available: selectedCourse.resources.notes.available, count: selectedCourse.resources.notes.count },
        practice: { available: selectedCourse.resources.practice.available, count: selectedCourse.resources.practice.count }
      }
    });
  }

  if (resourceType === 'questions') {
    return res.status(200).json(selectedCourse.resources.questions);
  }
  if (resourceType === 'notes') {
    return res.status(200).json(selectedCourse.resources.notes);
  }
  if (resourceType === 'practice') {
    return res.status(200).json(selectedCourse.resources.practice);
  }

  return res.status(400).json({ message: 'Invalid resource type' });
}
