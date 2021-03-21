import {TraversingQuery} from '@exadel/esl';

export class UIPStateModel {
  private html: string = '';

  protected get root(): Element {
    return new DOMParser().parseFromString(this.html, 'text/html').body;
  }

  public set state(html: string) {
    this.html = html;
  }

  public get state() {
    return this.html;
  }

  public getAttribute(target: string, name: string): (string | null)[] {
    return TraversingQuery.all(target, this.root).map(el => el.getAttribute(name));
  }

  public setAttribute(target: string, name: string, value: string | boolean): void {
    const root = this.root;
    const elements = TraversingQuery.all(target, root);

    if (typeof value === 'string') {
      elements.forEach(el => el.setAttribute(name, value));
    } else {
      elements.forEach(el => value ? el.setAttribute(name, '') : el.removeAttribute(name));
    }

    this.html = root.innerHTML;
  }
}
