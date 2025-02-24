import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI-Powered Dashboard</h1>
    <div class="dashboard">
      <ai-widget></ai-widget>
      <chart-widget></chart-widget>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }