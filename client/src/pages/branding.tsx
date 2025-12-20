import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Palette } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Branding() {
  const [companyName, setCompanyName] = useState("Your Company");
  const [primaryColor, setPrimaryColor] = useState("#3B82F6");
  const [secondaryColor, setSecondaryColor] = useState("#8B5CF6");
  const [fontFamily, setFontFamily] = useState("Inter");
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Brand Settings Saved",
      description: "Your branding preferences have been updated successfully.",
    });
  };

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Brand Customization</h2>
        <p className="text-slate-600">Customize the look and feel of your reports</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Brand Settings */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="w-5 h-5" />
                <span>Brand Identity</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="company-name">Company Name</Label>
                <Input
                  id="company-name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label>Company Logo</Label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors mt-1">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-600 font-medium">Upload logo</p>
                  <p className="text-xs text-slate-500 mt-1">PNG, JPG up to 2MB</p>
                </div>
              </div>

              <div>
                <Label htmlFor="tagline">Company Tagline</Label>
                <Textarea
                  id="tagline"
                  placeholder="Your company tagline or description"
                  className="mt-1"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Color Scheme</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <Input
                      id="primary-color"
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-12 h-10 p-1 rounded"
                    />
                    <Input
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="secondary-color">Secondary Color</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <Input
                      id="secondary-color"
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-12 h-10 p-1 rounded"
                    />
                    <Input
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-4">
                <div className="h-12 rounded" style={{backgroundColor: primaryColor}}></div>
                <div className="h-12 rounded" style={{backgroundColor: secondaryColor}}></div>
                <div className="h-12 bg-green-500 rounded"></div>
                <div className="h-12 bg-red-500 rounded"></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="font-family">Font Family</Label>
                <Select value={fontFamily} onValueChange={setFontFamily}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Inter">Inter</SelectItem>
                    <SelectItem value="Roboto">Roboto</SelectItem>
                    <SelectItem value="Open Sans">Open Sans</SelectItem>
                    <SelectItem value="Lato">Lato</SelectItem>
                    <SelectItem value="Montserrat">Montserrat</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-lg font-bold mb-2" style={{fontFamily}}>
                  Weekly Progress Report
                </p>
                <p className="text-sm text-slate-600" style={{fontFamily}}>
                  This is how your report text will appear with the selected font.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex space-x-3">
            <Button onClick={handleSave} className="flex-1">
              Save Changes
            </Button>
            <Button variant="outline">
              Reset to Default
            </Button>
          </div>
        </div>

        {/* Live Preview */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-lg shadow-lg p-6 border">
                <div className="text-center border-b border-slate-200 pb-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center"
                    style={{backgroundColor: primaryColor}}
                  >
                    <span className="text-white font-bold">L</span>
                  </div>
                  <h1 className="text-2xl font-bold text-slate-900" style={{fontFamily}}>
                    Weekly Progress Report
                  </h1>
                  <p className="text-slate-600" style={{fontFamily}}>
                    {companyName} • Week 42 • October 2024
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900 mb-3" style={{fontFamily}}>
                      Progress Overview
                    </h2>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-3 rounded-lg" style={{backgroundColor: `${primaryColor}10`}}>
                        <div className="text-xl font-bold" style={{color: primaryColor}}>12</div>
                        <div className="text-xs text-slate-600" style={{fontFamily}}>Completed</div>
                      </div>
                      <div className="text-center p-3 rounded-lg" style={{backgroundColor: `${secondaryColor}10`}}>
                        <div className="text-xl font-bold" style={{color: secondaryColor}}>5</div>
                        <div className="text-xs text-slate-600" style={{fontFamily}}>In Progress</div>
                      </div>
                      <div className="text-center p-3 bg-red-50 rounded-lg">
                        <div className="text-xl font-bold text-red-600">2</div>
                        <div className="text-xs text-slate-600" style={{fontFamily}}>Overdue</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-slate-900 mb-3" style={{fontFamily}}>
                      Key Achievements
                    </h2>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: primaryColor}}></div>
                        <span className="text-slate-700 text-sm" style={{fontFamily}}>
                          Venue booking confirmed for main event
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: primaryColor}}></div>
                        <span className="text-slate-700 text-sm" style={{fontFamily}}>
                          Marketing campaign launched successfully
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
