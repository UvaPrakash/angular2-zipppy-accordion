import {Component} from 'angular2/core';
import {ZipppyComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    directives: [ZipppyComponent],
    template: `
		<zippy title="Title 1">
			Content 1
		</zippy>
		<zippy title="Title 2">
			Content 2
		</zippy>
    `
})
export class AppComponent { }
