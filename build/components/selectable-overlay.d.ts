import { LitElement } from 'lit';
import '@spectrum-web-components/icon';
import '@spectrum-web-components/theme/theme-lightest.js';
import { TemplateResult } from '@spectrum-web-components/icons-workflow/src/custom-tag';
declare class SelectableOverlay extends LitElement {
    selected: boolean;
    static styles: import("lit").CSSResult;
    constructor();
    render(): TemplateResult;
    private onClick;
}
export default SelectableOverlay;
//# sourceMappingURL=selectable-overlay.d.ts.map