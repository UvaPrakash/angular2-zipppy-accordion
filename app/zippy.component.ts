import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    templateUrl: 'app/zippy.component.html'
})

export class ZipppyComponent {
	isExpanded = false;

	@Input() title: string;

	toggle() {
		this.isExpanded = !this.isExpanded;
	}
}