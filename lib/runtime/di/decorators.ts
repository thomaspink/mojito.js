import { assert } from './../../debug/debug';
import { Injector } from './injector';
import { ClassType, getClassName } from '../../utils/class/class';
import { Annotations } from '../annotations/annotations';
import { InjectableMetadata, InjectMetadata } from './metadata';

export function Inject<C>(token: any): ParameterDecorator {
    return function (target: ClassType<C>, propertyKey: string | symbol, parameterIndex: number): void {
        Annotations.peek(target).add(new InjectMetadata(token));
    }
}

export function Injectable(): ClassDecorator {
    return function (target: ClassType<any>) {
        assert(typeof target === 'function', 'Decorator Injectable has to be applied on a class!', TypeError);
        Annotations.peek(target).add(new InjectableMetadata());
    }
}