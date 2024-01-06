import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  abc(){
    alert("You clicked me..!!!");
  }

  technologies: string[] = ['Java', 'SpringBoot', 'React.js', 'Angular','MySQL','Bootstrap','HTML','CSS'];
  technology: boolean = false;


  showTechnology() {
    this.technology = !this.technology;
  }
  certifications: string[] = [];
  cert:boolean=false;

  receiveCertificationData(certificationInfo: string) {
    this.cert=!this.cert;
    console.log(certificationInfo);
    this.certifications = certificationInfo.split('\t');

  }

  educationalQualifications: any[] = [
    {
      degree: "PG-DAC",
      completionDate: "July 2023",
      details: [
        { name: "Diploma in Advanced Computing", grade: "61%" },
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
    {
      degree: "XII",
      completionDate: "June 2017",
      details: [
        { name: "Nanaji Joshi Jr. College, Shahapur", grade: "71.84%" }
      ]
    },
    {
      degree: "X",
      completionDate: "May 2015",
      details: [
        { name: "Shirinbai Neterwala School, Tumsar", grade: "8.4 CGPA" }
      ]
    }
  ];
}

