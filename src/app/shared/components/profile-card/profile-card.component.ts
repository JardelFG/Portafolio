import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.sass',
})
export class ProfileCardComponent {
  tagText = [
    'cine',
    'dialogo',
    'lectura',
    'eventos',
    'gaming',
    'midudev',
    'todocode',
    'fazcode',
  ];
}
