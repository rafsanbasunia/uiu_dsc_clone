import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  User,  
  CreditCard, 
  Upload, 
  CheckCircle2, 
  School, 
  Phone,
  Facebook, 
  Linkedin, 
  AlertCircle, 
  Copy,
  Wallet
} from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Join() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Head>
        <title>Join Us - UIU Data Science Club</title>
        <meta name="description" content="Become a member of UIU Data Science Club" />
      </Head>

      <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Header */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Join Our Club</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fill out the form below to become a member of the UIU Data Science Club. 
              Join a community of data enthusiasts!
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <Card className="shadow-lg overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-border">
                <CardTitle className="text-xl flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Membership Registration Form
                </CardTitle>
                <CardDescription>
                  Please provide all the required information to complete your registration.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 md:p-8">
                <form className="space-y-10">
              
              {/* Personal Information */}
              <motion.section variants={fadeInUp} className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-border">
                  <User className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-medium text-foreground">Personal Information</h3>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      type="text" 
                      id="fullName" 
                      placeholder="John Wick"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <select 
                      id="gender"
                      defaultValue=""
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label>Date of Birth</Label>
                    <div className="grid grid-cols-3 gap-4">
                      <select defaultValue="" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="" disabled>Day</option>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                      <select defaultValue="" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="" disabled>Month</option>
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => (
                          <option key={i} value={i}>{m}</option>
                        ))}
                      </select>
                      <select defaultValue="" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="" disabled>Year</option>
                        {Array.from({ length: 100 }, (_, i) => 2025 - i).map(y => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bloodGroup">Blood Group</Label>
                    <select 
                      id="bloodGroup"
                      defaultValue=""
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="" disabled>Select blood group</option>
                      {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                        <option key={bg} value={bg}>{bg}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tshirt">T-Shirt Size</Label>
                    <select 
                      id="tshirt"
                      defaultValue=""
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="" disabled>Select size</option>
                      {['S', 'M', 'L', 'XL', 'XXL'].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="presentAddress">Present Address</Label>
                    <Textarea 
                      id="presentAddress"
                      placeholder="Your current address"
                    />
                  </div>
                </div>
              </motion.section>

              {/* Academic Information */}
              <motion.section variants={fadeInUp} className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-border">
                  <School className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-medium text-foreground">Academic Information</h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="studentId">Student ID</Label>
                    <Input 
                      type="text" 
                      id="studentId" 
                      placeholder="011223344"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emailUniversity">University Email</Label>
                    <Input 
                      type="email" 
                      id="emailUniversity" 
                      placeholder="student@uiu.ac.bd"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="school">School</Label>
                    <select 
                      id="school"
                      defaultValue=""
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="" disabled>Select school</option>
                      <option value="sose">School of Science and Engineering (SoSE)</option>
                      <option value="sobe">School of Business and Economics (SoBE)</option>
                      <option value="sohs">School of Humanities and Social Sciences (SoHS)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <select 
                      id="department"
                      defaultValue=""
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="" disabled>Select department</option>
                      <option value="cse">CSE</option>
                      <option value="eee">EEE</option>
                      <option value="bba">BBA</option>
                    </select>
                  </div>
                </div>
              </motion.section>

              {/* Contact Information */}
              <motion.section variants={fadeInUp} className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-border">
                  <Phone className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-medium text-foreground">Contact Information</h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      placeholder="01XXXXXXXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emailPersonal">Personal Email</Label>
                    <Input 
                      type="email" 
                      id="emailPersonal" 
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook Profile</Label>
                    <div className="relative">
                      <Facebook className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type="url" 
                        id="facebook" 
                        placeholder="https://facebook.com/username"
                        className="pl-9"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn Profile</Label>
                    <div className="relative">
                      <Linkedin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type="url" 
                        id="linkedin" 
                        placeholder="https://linkedin.com/in/username"
                        className="pl-9"
                      />
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Payment Information */}
              <motion.section variants={fadeInUp} className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-border">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-medium text-foreground">Payment Information</h3>
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-6">
                  <div className="flex items-center gap-2 font-semibold text-primary">
                    <Wallet className="w-5 h-5" />
                    Registration Fee: 500 TK
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* bKash */}
                    <div className="bg-card rounded-lg border border-border p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs">
                          bKash
                        </div>
                        <div>
                          <p className="font-medium">bKash Personal</p>
                          <p className="text-sm text-muted-foreground">01993-430115</p>
                        </div>
                      </div>
                      <button 
                        type="button"
                        onClick={() => handleCopy('01993-430115', 'bkash')}
                        className="p-2 hover:bg-muted rounded-md transition-colors"
                      >
                        {copied === 'bkash' ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                      </button>
                    </div>

                    {/* Rocket */}
                    <div className="bg-card rounded-lg border border-border p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">
                          Rocket
                        </div>
                        <div>
                          <p className="font-medium">Rocket Personal</p>
                          <p className="text-sm text-muted-foreground">01993-430115</p>
                        </div>
                      </div>
                      <button 
                        type="button"
                        onClick={() => handleCopy('01993-430115', 'rocket')}
                        className="p-2 hover:bg-muted rounded-md transition-colors"
                      >
                        {copied === 'rocket' ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-background border border-border rounded-lg p-4 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p className="font-medium text-foreground">Important Instructions:</p>
                      <ul className="list-disc list-inside">
                        <li>Send the exact amount (500 TK).</li>
                        <li>Use "Send Money" option.</li>
                        <li>Keep the Transaction ID safe.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="paymentMethod">Payment Method</Label>
                    <select 
                      id="paymentMethod"
                      defaultValue=""
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="" disabled>Select method</option>
                      <option value="bkash">bKash</option>
                      <option value="rocket">Rocket</option>
                      <option value="cash">Cash</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trxId">Transaction ID</Label>
                    <Input 
                      type="text" 
                      id="trxId" 
                      placeholder="TrxID12345678"
                    />
                  </div>
                </div>
              </motion.section>

              {/* Photo Upload */}
              <motion.section variants={fadeInUp} className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-border">
                  <Upload className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-medium text-foreground">Photo Upload</h3>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo">Upload Photo (for ID Card)</Label>
                  <div className="flex items-center justify-center w-full">
                    <label htmlFor="photo" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-input rounded-lg cursor-pointer bg-background hover:bg-accent/50 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="photo" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
              </motion.section>

              {/* Terms */}
              <motion.div variants={fadeInUp} className="flex items-start space-x-3 pt-4">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="h-4 w-4 rounded border-primary text-primary focus:ring-primary mt-1"
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="terms">
                    I accept the terms and conditions
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    By checking this box, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={fadeInUp} className="pt-4">
                <Button 
                  type="submit"
                  className="w-full h-11 px-8"
                >
                  Submit Application
                </Button>
              </motion.div>

            </form>
            </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </>
  );
}
