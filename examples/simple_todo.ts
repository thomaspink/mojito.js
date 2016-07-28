import { observes } from 'mojito/core';
import { Injector, Injectable, Inject, Component, Output, Input, bootstrap, Provider, ElementRef, HostElement } from 'mojito/runtime';

console.time('startUp');

class Todo {
    private _id: string;
    private _title: string;
    private _due: Date;
    private _created: Date;
    private _updated: Date;

    get id() { return this._id; }
    get title() { return this._title; }
    get due() { return this._due; }
    get created() { return this._created; }
    get updated() { return this._updated; }

    set title(newTitle: string) {
        this._title = newTitle;
        this._updated = new Date();
    }
    set due(newDue: Date) {
        this._due = newDue;
        this._updated = new Date();
    }

    constructor(title: string, due: Date) {
        let date = new Date();
        this._id = Date.now() + '';
        this._title = title;
        this._due = due;
        this._created = date;
        this._updated = date;
    }
}

@Injectable()
class TodoStore {
    private todos: Todo[] = [];

    add(title: string, due: Date) {
        this.todos.push(new Todo(title, due));
    }

    remove(todo: Todo) {

    }
}

@Component({ selector: '[todo-app]' })
class TodoApp {
    constructor( @Inject(TodoStore) store: TodoStore) {
        store.add('test', new Date());
    }
}

@Component({ selector: 'todo-form' })    
class TodoForm {
    @Input('hero')  hero: any;
    @Output() submit:any = null;

    constructor(
        @Inject(TodoStore) store: TodoStore,
        @Inject(ElementRef) element: ElementRef,
        @Inject(HostElement) host: HostElement
    ) {
        console.log('init TodoForm', element.nativeElement);
    }

    submit1() {
        // submit
    }
}

@Component({ selector: 'todo-list' })    
class TodoList {
    constructor(
        @Inject(TodoStore) store: TodoStore,
        @Inject(ElementRef) element: ElementRef
    ) {
        // console.log('init TodoList', element.nativeElement);
    }
}

@Component({
    selector: '[todo-item]',
    template: `
        <tr todo-item >
            <td class="mdl-data-table__cell--non-numeric">{{title}}</td>
            <td>{{due}}</td>
        </tr>
    `
})    
class TodoListItem {
    constructor(
        @Inject(TodoStore) store: TodoStore,
        @Inject(ElementRef) element: ElementRef
    ) {
        // console.log('init TodoItem', element.nativeElement);
    }
}


bootstrap(TodoApp, [TodoStore]);

console.timeEnd('startUp');

// Check if metadata is an object
// assert(
//     typeof metadata === 'object' && !Array.isArray(metadata),
//     `The metadata property for the directive on your class "${getClassName(klass)}" must be an object and implement the IControllerMetadata interface!`,
//     TypeError
// );

// // Check if a selector is specified in the metadata.
// // Every directive must have a selector
// assert(typeof metadata.selector === 'string',
//     `The directive metadata object on your class "${getClassName(klass)}" must specify a selector!`,
//     TypeError);

// metadata.selector = metadata.selector.trim();

// // Check if selector contains only one level of dom nodes
// // Ok: .my-selector
// // Not allowed: .parent .my-selector
// assert(metadata.selector.indexOf(' ') === -1,
//     `The directive selector "${metadata.selector}" on your class "${getClassName(klass)}" contains more than one levels of nodes. Only one is allowed!`,
//     SyntaxError);

// // Check if selector is valid
// assert(!!metadata.selector.match(/^([a-z#\-\.\[\]\=\"\']*)+$/),
//     `The directive selector "${metadata.selector}" on your class "${getClassName(klass)}" is not valid`,
//     SyntaxError);

// // Parsing the selector string to an array
// // 'my-element.class1#id[attribute1].class2[attribute2="value"]'
// // to
// // ["my-element", ".class1", "#id", "[attribute1]", ".class2", "[attribute2="value"]"]   
// let selectorList: string[] = metadata.selector.split('.').join(' .').split('#').join(' #').split('[').join(' [').trim().split(' ');

// for (let i = 0, max = selectorList.length; i < max; i++) {
//     let selector = selectorList[i];
//     if (!selector.length) {
//         continue;
//     }

//     // Check if the selector contains element names whicht are not allowed
//     // eg. custom elements without a "-" in it
//     assert(
//         !selector.match(/^\w+(-\w+)*$/) || !(document.createElement(selector) instanceof HTMLUnknownElement),
//         `The selector "${metadata.selector}" on your class "${getClassName(klass)}" contains an element name "${selector}" which is not allowed. 
//         If you are using a custom element, there has to be a "-" char in it. E.g.: my-component`,
//         SyntaxError);
// }