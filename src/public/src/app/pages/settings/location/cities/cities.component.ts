import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { Lookup } from '@app/models/lookup';
import { LookupService } from '@app/services/lookup.service';
import { ConfirmationService, MessageService, PrimeTemplate, TreeNode } from 'primeng/api';
import { CitiesService } from '../../../../services/cities.service';

@Component({
	selector: 'app-cities-info',
	templateUrl: './cities.component.html',
})
export class CitiesComponent implements OnInit {

	citiesDialog: boolean;
	cities: Lookup[] = [];
	city: Lookup;
	cols: any[];
	selectedCities: Lookup[];
	submitted: boolean;
	files1: TreeNode[];
	selectedCountry: TreeNode;
	countryDialog: boolean;
	countries: Lookup[] = [];
	data: Lookup[] = [];
	Id: number = 0;

	@ContentChildren(PrimeTemplate) templates: QueryList<PrimeTemplate>;


	constructor(private citiesService: CitiesService, private lookupService: LookupService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

	ngOnInit(): void {

		this.lookupService.getCountryLookup().then((data) => {
			console.log("data", data);
			this.data = data;
			for (let data of this.data) {
				data.selected = false;
				if (data.LookupTypeId == 4) {
					this.cities.push(data);
				}
				if (data.LookupTypeId == 3) {
					this.countries.push(data);
				}
			}
		});
		this.cols = [
			{ field: '#', header: 'Id' },
			{ field: 'nameen', header: 'NameEn' },
			{ field: 'Namear', header: 'NameAr' },
			{ field: 'phonecode', header: 'Phonecode' },
			{ field: 'timezone', header: 'Timezone' },
			{ field: 'status', header: 'Status' }
		];


	}

	onCountryCheckClick(event: any, country: Lookup) {
		if (event.checked) {
			for (let i = 0; i < this.cities.length; i++) {
				if (this.cities[i].ParentId == country.Id) {
					this.cities[i].selected = true;
				}
			}
		}
		else {
			for (let i = 0; i < this.cities.length; i++) {
				if (this.cities[i].ParentId == country.Id) {
					this.cities[i].selected = false;
				}
			}
		}
	}

	openNew() {
		this.city = new Lookup();
		this.submitted = false;
		this.citiesDialog = true;
	}

	deleteSelectedProducts() {
		this.confirmationService.confirm({
			message: 'Are you sure you want to delete the selected products?',
			header: 'Confirm',
			icon: 'pi pi-exclamation-triangle',
			accept: () => {
				this.cities = this.cities.filter(val => !this.selectedCities.includes(val));
				this.selectedCities = null;
				this.messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Products Deleted',
					life: 3000
				});
			}
		});
	}

	editProduct(city: Lookup) {
		this.city = { ...city };
		this.citiesDialog = true;
	}

	deleteProduct(city: Lookup) {
		this.confirmationService.confirm({
			message: 'Are you sure you want to delete ' + city.NameEn + '?',
			header: 'Confirm',
			icon: 'pi pi-exclamation-triangle',
			accept: () => {
				this.cities = this.cities.filter(val => val.Id !== city.Id);
				this.city = null;
				this.messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Country Deleted',
					life: 3000
				});
			}
		});
	}

	hideDialog() {
		this.citiesDialog = false;
		this.submitted = false;
	}

	saveProduct() {
		this.submitted = true;

		if (this.city.NameEn.trim()) {
			if (this.city.Id) {
				this.cities[this.findIndexById(this.city.Id)] = this.city;
				this.messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Country Updated',
					life: 3000
				});
			} else {
				this.city.Id = this.createId();
				this.city.Image = 'product-placeholder.svg';
				this.cities.push(this.city);
				this.messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Country Created',
					life: 3000
				});
			}

			this.cities = [...this.cities];
			this.countryDialog = false;
			this.city = null;
		}
	}
	findIndexById(id: any): number {
		let index = -1;
		for (let i = 0; i < this.cities.length; i++) {
			if (this.cities[i].Id === id) {
				index = i;
				break;
			}
		}

		return index;
	}

	createId(): number {
		let id = '';
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < 5; i++) {
			id += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		return parseInt(id);
	}
}



