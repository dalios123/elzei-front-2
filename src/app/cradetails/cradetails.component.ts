import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CRA } from '../Models/CRA';
import { CRAService } from '../Services/CRA.service';
import { ClientService } from '../Services/Client.service';
import { MissionService } from '../Services/Mission.service';
import { SalariesService } from '../Services/Salaries.service';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../Models/Mission';

@Component({
  selector: 'app-cradetails',
  templateUrl: './cradetails.component.html',
  styleUrl: './cradetails.component.css'
})
export class CradetailsComponent {
 }
