import {attr, ESLBaseElement} from '@exadel/esl/modules/esl-base-element/core';
import {bind} from '@exadel/esl/modules/esl-utils/decorators/bind';
import {UIPEditor} from '../editor/editor';
import {CSSUtil} from '@exadel/esl';
import {UIPRoot} from '../core/root';

export class UIPOptions extends ESLBaseElement {
  static is = 'uip-options';

  @attr({defaultValue: 'vertical'}) public mode: string;
  @attr({defaultValue: 'light'}) public theme: string;

  @attr({defaultValue: ''}) public target: string;
  @attr({defaultValue: 'Options:'}) public label: string;

  protected _$root: UIPRoot;

  protected attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {
    if (!this.connected || newVal === oldVal) return;

    if (attrName === 'mode') this.updateModeMarker();
    if (attrName === 'theme') this.updateThemeMarker();
  }

  protected connectedCallback() {
    super.connectedCallback();

    this._$root = this.closest(`${UIPRoot.is}`) as UIPRoot;

    this.bindEvents();
    this.render();

    this.updateModeMarker();
    this.updateThemeMarker();
    this._onResize();
  }

  protected disconnectedCallback() {
    super.disconnectedCallback();
    this.unbindEvents();
  }

  protected bindEvents() {
    this.addEventListener('click', this._onOptionChange);
    window.addEventListener('resize', this._onResize);
  }

  protected unbindEvents() {
    this.removeEventListener('click', this._onOptionChange);
    window.removeEventListener('resize', this._onResize);
  }

  protected render() {
    if (this.label) this.innerHTML = `<span class="section-name">${this.label}</span>`;
    if (this.mode) this.renderMode();
    if (this.theme) this.renderTheme();
  }

  protected renderMode() {
    const $mode = document.createElement('div');
    $mode.classList.add('uip-option');
    $mode.classList.add('mode');
    $mode.innerHTML = `
        <div class="option-item">
            <input type="radio" id="vertical-mode" mode="vertical" class="option-radio-btn">
            <label for="vertical-mode" class="option-label">Vertical</label>
        </div>
        <div class="option-item">
            <input type="radio" id="horizontal-mode" mode="horizontal" class="option-radio-btn">
            <label for="horizontal-mode" class="option-label">Horizontal</label>
        </div>`;
    this.appendChild($mode);
  }

  protected renderTheme() {
    const $theme = document.createElement('div');
    $theme.classList.add('uip-option');
    $theme.classList.add('theme');
    $theme.innerHTML = `
        <div class="option-item">
            <input type="radio" id="light-theme" theme="light" class="option-radio-btn">
            <label for="light-theme" class="option-label">Light</label>
        </div>
        <div class="option-item">
            <input type="radio" id="dark-theme" theme="dark" class="option-radio-btn">
            <label for="dark-theme" class="option-label">Dark</label>
        </div>`;
    this.appendChild($theme);
  }

  @bind
  protected _onOptionChange(e: Event) {
    const target = e.target as HTMLElement;
    if (!target) return;

    const mode = target.getAttribute('mode');
    const theme = target.getAttribute('theme');

    if (mode) {
      this.mode = mode;
      this.updateModeMarker();
    }

    if (theme) {
      this.theme = theme;
      this.updateThemeMarker();
    }
  }

  protected changeEditorTheme(theme: string) {
    const $editor = this._$root.querySelector('uip-editor') as UIPEditor;
    if (!$editor) return;
    const editorConfig = $editor.editorConfig;
    editorConfig.theme = theme === 'dark' ? 'ace/theme/tomorrow_night' : 'ace/theme/chrome';
    $editor.setEditorConfig(editorConfig);
  }

  protected updateModeMarker(mode: string = this.mode) {
    CSSUtil.removeCls(this._$root, 'vertical-mode');
    CSSUtil.removeCls(this._$root, 'horizontal-mode');
    CSSUtil.addCls(this._$root, `${mode}-mode`);
  }

  protected updateThemeMarker(theme: string = this.theme) {
    CSSUtil.removeCls(this._$root, 'light-theme');
    CSSUtil.removeCls(this._$root, 'dark-theme');
    CSSUtil.addCls(this._$root, `${theme}-theme`);
    this.changeEditorTheme(theme);
  }

  @bind
  protected _onResize() {
    if (window.matchMedia('(max-width: 992px)').matches) {
      this.mode = 'horizontal';
      this.updateModeMarker();
    }
  }
}