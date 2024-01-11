import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  downloadResume():void{
    const link = document.createElement('a');
    link.href = '/assets/KB.pdf';
    link.target = '_blank';
    link.download = 'Kunal-Baghele.pdf';
    link.click();
  }

  technologies: string[] = ['Java', 'SpringBoot', 'React.js', 'Angular','MySQL','Bootstrap','HTML','CSS'];
  technology: boolean = false;


  showTechnology() {
    this.technology = !this.technology;
  }

  educationalQualifications: any[] = [
    {
      degree: "PG-DAC",
      completionDate: "July 2023",
      details: [
        { name: "Diploma in Advanced Computing", grade: "67%" },
        { name: "Full Stack Development (CDAC)" }
      ]
    },
    {
      degree: "Bachelor of Engineering",
      completionDate: "July 2021",
      details: [
        { name: "G H Raisoni College of Engineering Nagpur", grade: "8.71 CGPA" }
      ]
    },
  ];
}

