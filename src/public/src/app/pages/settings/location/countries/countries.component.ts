import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { Lookup } from '@app/models/lookup';
import { LookupService } from '@app/services/lookup.service';
import { ConfirmationService, MessageService, PrimeTemplate } from 'primeng/api';

@Component({
	selector: 'app-countries-info',
	templateUrl: './countries.component.html',
})
export class CountriesComponent implements OnInit {
	countryDialog: boolean;
	countries: Lookup[] = [];
	country: Lookup;
	cols: any[];
	selectedCountries: Lookup[];
	submitted: boolean;
	@ContentChildren(PrimeTemplate) templates: QueryList<PrimeTemplate>;

	constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private lookupService: LookupService) { }

	ngOnInit(): void {
		this.lookupService.getLookup().then((data) => {
			// this.countries = data
			for(let country of data) {
				console.log("country.LookupTypeId",country.LookupTypeId);
				if(country.LookupTypeId == 3) {
					this.countries.push(country);
				}
			}
			console.log("this.countries", this.countries);
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

	openNew() {
		this.country = new Lookup();
		this.submitted = false;
		this.countryDialog = true;
	}

	deleteSelectedProducts() {
		this.confirmationService.confirm({
			message: 'Are you sure you want to delete the selected products?',
			header: 'Confirm',
			icon: 'pi pi-exclamation-triangle',
			accept: () => {
				this.countries = this.countries.filter(val => !this.selectedCountries.includes(val));
				this.selectedCountries = null;
				this.messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Products Deleted',
					life: 3000
				});
			}
		});
	}

	editProduct(country: Lookup) {
		this.country = { ...country };
		this.countryDialog = true;
	}

	deleteProduct(country: Lookup) {
		this.confirmationService.confirm({
			message: 'Are you sure you want to delete ' + country.NameEn + '?',
			header: 'Confirm',
			icon: 'pi pi-exclamation-triangle',
			accept: () => {
				this.countries = this.countries.filter(val => val.Id !== country.Id);
				this.country = null;
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
		this.countryDialog = false;
		this.submitted = false;
	}

	saveProduct() {
		this.submitted = true;

		if (this.country.NameEn.trim()) {
			if (this.country.Id) {
				this.countries[this.findIndexById(this.country.Id)] = this.country;
				this.messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Country Updated',
					life: 3000
				});
			} else {
				this.country.Id = this.createId();
				this.country.Image = 'product-placeholder.svg';
				this.countries.push(this.country);
				this.messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Country Created',
					life: 3000
				});
			}

			this.countries = [...this.countries];
			this.countryDialog = false;
			this.country = null;
		}
	}

	findIndexById(id: any): number {
		let index = -1;
		for (let i = 0; i < this.countries.length; i++) {
			if (this.countries[i].Id === id) {
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
