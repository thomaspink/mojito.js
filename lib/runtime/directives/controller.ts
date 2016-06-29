import { Directive, DirectiveMetadata } from './directive';

export interface ControllerMetadata extends DirectiveMetadata {
    
    /**
     * Specifes the actions (events) related to the element.
     *
     * ```typescript
     * @Controller({
     *   selector: 'button',
     *   actions: {
     *     '(click)': 'onClick(event)'
     *   }
     * })
     * class LoginController {
     *     onClick(event: MouseEvent) {
     *       // your code
     *     }
     * }
     * ```
     *
     * @type {{[key: string]: string}}
     */
    actions?: {[key: string]: string};
}

export function Controller(meta: ControllerMetadata): ClassDecorator {
    return Directive(meta);
}