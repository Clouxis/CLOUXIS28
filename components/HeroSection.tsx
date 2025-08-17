'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      <Card className="w-full h-screen bg-white relative overflow-hidden border-0 rounded-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="black"
        />
        
        <div className="flex h-full">
          {/* Left content */}
          <div className="flex-1 p-8 lg:p-16 relative z-10 flex flex-col justify-center max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
              Everything App
              <br />
              for your
              <br />
              <span className="text-red-600">
                teams
              </span>
            </h1>
            
            <p className="mt-6 text-gray-700 max-w-xl text-xl leading-relaxed">
              Clouxis, an open-source platform, serves as an all-in-one 
              replacement of Linear, Jira, Slack, and Notion.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 group border-0 hover:scale-105">
                SEE IN ACTION
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Right content - Robot */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full spline-robot-geometric"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}