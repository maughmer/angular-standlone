import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  templates: { [key: string]: TemplateRef<any> } = {};

  add(name: string, template: TemplateRef<any>): void {
    if (!this.templates[name]) {
      this.templates[name] = template;
    }
  }

  get(name: string): TemplateRef<any> {
    const template = this.templates[name];
    return template;
  }

}
