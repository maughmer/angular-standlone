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
    console.log('getting:', name);
    const template = this.templates[name];
    console.log('template:', template);
    return template;
  }

}
