import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { CANDIDATES } from '@app/main/home/candidates';

const isHigh = (score: number) => score >= 90;
const isMid = (score: number) => score >= 80 && score < 90;

@Component({
  selector: 'app-home',
  imports: [FormsModule, MatFormField, MatIcon, MatIconButton, MatInput, MatLabel, MatOption, MatSelect, MatSuffix],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Home {
  ranking = 0;
  search = '';
  vacType = '';
  readonly isHigh = isHigh;
  readonly isMid = isMid;
  readonly rankings = [{ key: 0, value: 'По анализу резюме' }, { key: 1, value: 'По AI интервью' }];
  readonly vacTypes = [
    { key: '', value: 'Не выбрано' },
    { key: 'FE', value: 'Frontend Developer' },
    { key: 'BE', value: 'Backend Developer' },
    { key: 'DS', value: 'Data Scientist' },
  ];

  get candidates() {
    const search = this.search.toLowerCase();
    return CANDIDATES.filter(candidate =>
      candidate.name.toLowerCase().includes(search) ||
      candidate.skills.some(skill => skill.toLowerCase().includes(search))
    );
  }
}
