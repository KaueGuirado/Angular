import { Component } from '@angular/core';
import {Configuracao} from './configuracao';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule],
  templateUrl: './configuracoes.component.html',
  styleUrl: './configuracoes.component.scss'
})
export class ConfiguracoesComponent {
  
  model = new Configuracao('aaa', 'Tom Cruise', 'wssdf', 'CW Productions');

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
