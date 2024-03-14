import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ViewEncapsulation
} from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  standalone: true,
  imports: [
    DropdownModule,
    ReactiveFormsModule,
    InputTextareaModule,
    RadioButtonModule,
    TooltipModule,
    ButtonModule,
    RippleModule,
    NgIf,
    LottieComponent,
    NgOptimizedImage,
    InputTextModule
  ],
  templateUrl: './uniforge.component.html',
  styleUrl: './uniforge.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniforgeComponent {
  public configurationForm: FormGroup;
  public genAIAnimationOptions: AnimationOptions = {
    path: '/assets/lottie/kairos-ai-generation.json',
    loop: true
  }

  // TODO: Make this mock dynamic
  protected generating = false;
  protected generated = false;
  protected pristine = true;
  protected revisionNumber: number | null = null;

  get unitBlockRevision() {
    const DATE = new Date();
    return `1.0.0.${this.revisionNumber} ${DATE.getDate()}.${DATE.getUTCMonth() + 1}/${DATE.getFullYear() % 100}`
  }

  get generationNumber() {
    const number = this.revisionNumber !== null ? this.revisionNumber + 1 : 1;
    if (number === 0) {
      return '0'; // No ordinal for zero
    }
    // Special cases for 11th, 12th, and 13th
    if (number % 100 === 11 || number % 100 === 12 || number % 100 === 13) {
      return number + 'th';
    }

    // Handle other cases
    switch (number % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
      default:
        return number + 'th';
    }
  }

  get showIntro() {
    return !this.generating && !this.generated;
  }

  get showUnitBlock() {
    return !this.generating && this.generated;
  }

  get showHello() {
    return !this.showUnitBlock && this.pristine;
  }

  // TODO: Make this dynamically loaded from server
  public departments: string[] = [
    'Frontend',
    'Backend',
    'Design',
    'Quality Assurance',
    'DevOps',
    'Data Science',
    'Machine Learning',
    'Security'
  ];
  // TODO: Make this dynamically loaded from server
  // TODO: Filter based on previous selection
  public techStack: string[] = [
    // Frontend
    "React", "Angular", "Vue.js", "Svelte", "Ember.js", "Next.js", "Nuxt.js", "Gatsby",
    // Backend
    "Java", "Python", "Node.js", "C#", "Go", "Ruby", "PHP",
    // Full-stack
    "Django", "Ruby on Rails", "Spring Boot",
    // Mobile
    "Flutter", "React Native", "Kotlin", "Swift",
    // Database
    "MySQL", "PostgreSQL", "MongoDB", "SQLite",
    // Cloud
    "AWS", "Azure", "GCP", "Heroku",
    // DevOps
    "Jenkins", "GitLab CI/CD", "CircleCI", "Terraform", "Ansible",
    // Data Science & Machine Learning
    "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Jupyter Notebook",
    // Other
    "JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Material UI",
    // Additional Options
    "Assembly Language", "C", "C++", "Objective-C", "SwiftUI", "JavaFX",
    ".NET", ".NET MAUI", "ASP.NET", "Blazor", "WebAssembly",
    "Rust", "GoLang", "Kotlin Multiplatform (KMM)",
    "SQL Server", "Oracle Database", "NoSQL Cassandra", "NoSQL Couchbase",
    "AWS Amplify", "Firebase", "Backendless",
    // Emerging Technologies (consider for future-proofing)
    "WebAssembly", "GraphQL", "Blockchain", "Serverless Computing",
    "Quantum Computing", "Edge Computing", "AR/VR Development"
  ];
  public workIntent: string[] = [
    "Create",
    "Update",
    "Integrate",
    "Test",
    "Deploy",
    "Refactor",
    "Analyze",
    "Model",
    "Secure",
    "Review",
    "Experiment"
  ];
  public deliverable: string[] = [
    // Frontend
    "UI Component",
    "Layout",
    "Page",
    "Interactive Prototype",
    "User Journey Map",
    // Backend
    "API Endpoint REST",
    "API Endpoint GraphQL",
    "Database Schema",
    "Microservice",
    "Background Task",
    "Data Migration Script",
    // Data Science & Machine Learning
    "ML Classification Model",
    "ML Regression Model",
    "Data Visualization",
    "Data Pipeline",
    "Feature Engineering Script",
    "Predictive Analytics Report",
    // DevOps
    "IaC Configuration Terraform",
    "CI/CD Pipeline",
    "Deployment Script",
    "Monitoring Dashboard",
    "Security Automation Script",
    // Design
    "Design Mockup LF wireframe",
    "Design Mockup HF prototype",
    "Style Guide",
    "UI Kit",
    "UX Research Report",
    "Design System Component",
    // General
    "Documentation",
    "Test Case",
    "Bug Fix",
    "Code Refactoring Script",
    "Optimization Report",
    // Additional Options
    "Code Review Feedback",
    "Tech Debt Reduction Plan",
    "Training Materials",
    "Third-Party Integration",
    "Security Patch"
  ];

  public efficiencyOptimization: string[] = [
    'Balance',
    'High Speed',
    'High Quality'
  ]

  public estimatedEffort: string[] = [
    '15 Minutes',
    '30 Minutes',
    '60 Minutes',
    '2 Hours',
    '3 Hours',
    '4 Hours',
    '5 Hours',
    '6 Hours',
    'Long (Not Recommended)'
  ];

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _cdr: ChangeDetectorRef
  ) {
    this.configurationForm = _fb.group({
      department: [this.departments[0], [Validators.required]],
      techStack: [this.techStack[0], [Validators.required]],
      workIntent: [this.workIntent[0], [Validators.required]],
      deliverable: [this.deliverable[0], [Validators.required]],
      complexity: [0, [Validators.required]],
      estimatedEffort: [this.estimatedEffort[0], [Validators.required]],
      efficiencyOptimization: [this.efficiencyOptimization[0], [Validators.required]],
    })
  }

  public generate() {
    this.pristine = false;
    if(this.revisionNumber === null) {
      this.revisionNumber = 0;
    } else {
      ++this.revisionNumber;
    }
    this.generating = true;
    setTimeout(() => {
      this.generating = false;
      this.generated = true;
      this._cdr.markForCheck();
    }, 10000)
  }
}
