import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css'
})
export class CertificationComponent {

  @Output() certificationData = new EventEmitter();

  sendCertificationData() {
    const certificationInfo = "Software Testing (Automation And Manual)\n(Java-Selenium WebDriver)\t• TCS NQT - IT Foundation - 57.95%\nProgramming - 60.26%";
    this.certificationData.emit(certificationInfo);
  }
}
