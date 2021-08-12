import {bind} from '@exadel/esl/modules/esl-utils/decorators/bind';
import {CSSClassUtils} from '@exadel/esl';
import {generateUId} from '@exadel/esl/modules/esl-utils/misc/uid';

import {UIPPlugin} from '../core/plugin';

/**
 * Custom element to provide controls for changing UIP visual appearance.
 * @extends UIPPlugin
 */
export class UIPOptions extends UIPPlugin {
  static is = 'uip-options';

  protected connectedCallback() {
    super.connectedCallback();
    this.bindEvents();

    this.render();

    if (this.root) {
      this.updateModeMarker(this.root.mode);
      this.updateThemeMarker(this.root.theme);
    }
  }

  protected disconnectedCallback() {
    super.disconnectedCallback();
    this.unbindEvents();
  }

  protected bindEvents() {
    this.addEventListener('change', this._onOptionChange);
    this.root?.addEventListener('uip:configchange', this._onRootConfigChange);
  }

  protected unbindEvents() {
    this.removeEventListener('change', this._onOptionChange);
    this.root?.removeEventListener('uip:configchange', this._onRootConfigChange);
  }

  protected render() {
    this.innerHTML = '';
    this.renderMode();
    this.renderTheme();
  }

  protected renderMode() {
    const $mode = document.createElement('div');
    CSSClassUtils.add($mode, 'uip-option mode');
    const modeOptionId = generateUId();
    $mode.innerHTML = `
        <div class="option-item">
            <input type="radio" id=${modeOptionId}-vertical name=${modeOptionId}-mode mode="vertical"
            class="option-radio-btn" ${this.root?.mode === 'vertical' ? 'checked' : ''}>
            <label class="option-label" for=${modeOptionId}-vertical>Vertical</label>
        </div>
        <div class="option-item">
            <input type="radio" id=${modeOptionId}-horizontal name=${modeOptionId}-mode mode="horizontal"
            class="option-radio-btn" ${this.root?.mode === 'horizontal' ? 'checked' : ''}>
            <label class="option-label" for=${modeOptionId}-horizontal>Horizontal</label>
        </div>`;
    this.appendChild($mode);
  }

  protected renderTheme() {
    const $theme = document.createElement('div');
    CSSClassUtils.add($theme, 'uip-option theme');
    const themeOptionId = generateUId();
    $theme.innerHTML = `
        <div class="option-item">
            <input type="radio" id=${themeOptionId}-uip-light name=${themeOptionId}-theme theme="uip-light"
            class="option-radio-btn" ${this.root?.theme === 'uip-light' ? 'checked' : ''}>
            <label class="option-label" for=${themeOptionId}-uip-light>Light</label>
        </div>
        <div class="option-item">
            <input type="radio" id=${themeOptionId}-uip-dark name=${themeOptionId}-theme theme="uip-dark"
            class="option-radio-btn" ${this.root?.theme === 'uip-dark' ? 'checked' : ''}>
            <label class="option-label" for=${themeOptionId}-uip-dark>Dark</label>
        </div>`;
    this.appendChild($theme);
  }

  @bind
  protected _onOptionChange(e: Event) {
    const target = e.target as HTMLElement;

    const mode = target.getAttribute('mode');
    const theme = target.getAttribute('theme');

    if (mode) this.updateModeMarker(mode);
    if (theme) this.updateThemeMarker(theme);
  }

  @bind
  protected _onRootConfigChange(e: CustomEvent) {
    const attr = e.detail.attribute;
    const value = e.detail.value;
    const marker = this.querySelector(`input[${attr}="${value}"]`) as HTMLInputElement;
    const defaultMarker = this.querySelector(`input[${attr}`) as HTMLInputElement;
    marker ? marker.checked = true : defaultMarker.checked = true;
  }

  protected updateModeMarker(mode: string) {
    if (this.root) this.root.mode = mode;
  }

  protected updateThemeMarker(theme: string) {
    if (this.root) this.root.theme = theme;
  }
}
