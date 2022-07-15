import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { Lookup } from '@app/models/lookup';
import { LookupService } from '@app/services/lookup.service';
import { ConfirmationService, MessageService, PrimeTemplate, TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';
import { CitiesService } from '../../../../services/cities.service';

@Component({
	selector: 'app-districts-info',
	templateUrl: './districts.component.html',
})
export class DistrictsComponent implements OnInit {

	districtsDialog: boolean;
	districts: Lookup[] = [];
	district: Lookup;
	cols: any[];
	selectedDistricts: Lookup[];
	submitted: boolean;

	selectedCountry: TreeNode;
	countryDialog: boolean;
	countries: Lookup[] = [];
	cities: Lookup[] = [];
	data: Lookup[] = [];
	checked: any;
	Id: number = 0;
	selectedFiles: TreeNode;
	files: TreeNode[] = [];

	@ContentChildren(PrimeTemplate) templates: QueryList<PrimeTemplate>;


	constructor(private citiesService: CitiesService, private lookupService: LookupService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

	ngOnInit(): void {
		this.lookupService.getCountryLookup().then((data) => {
			this.data = data;
			for (let district of this.data) {
				if (district.LookupTypeId == 5) {
					this.districts.push(district);
				}
			}

			for (let cities of this.data) {
				if (cities.LookupTypeId == 4) {
					this.cities.push(cities);
				}
			}

			for (let object of this.data) {
				if (object.LookupTypeId == 3) {
					this.files.push({ "key": "" + object.Id, "label": object.NameEn, data: { object }, children: [] });
					for (let city of this.cities) {
						if (city.ParentId == object.Id) {
							for (let i = 0; i < this.files.length; i++) {
								if (parseInt(this.files[i].key) == object.Id) {
									this.files[i].children.push({ "key": "" + city.Id, "label": city.NameEn, data: { city }, children: [] });
								}
							}
						}

					}
				}
			}

			this.cols = [
				{ field: '#', header: 'Id' },
				{ field: 'nameen', header: 'NameEn' },
				{ field: 'Namear', header: 'NameAr' },
				{ field: 'phonecode', header: 'Phonecode' },
				{ field: 'timezone', header: 'Timezone' },
				{ field: 'status', header: 'Status' }
			];

		});

	}

	nodeSelect(evt: any): void {
		this.districts = [];
		for (let data of this.data) {
			if (data.ParentId == evt.node.key) {
				this.districts.push(data);
			}
		}
	}

	onCountryCheckClick(event: any, country: Lookup) {
		this.districts = [];
		if (event.checked) {
			for (let data of this.data) {
				if (data.ParentId == country.Id) {
					this.districts.push(data);
				}
			}
		}

	}

	openNew() {
		this.district = new Lookup();
		this.submitted = false;
		this.districtsDialog = true;
	}

	deleteSelectedProducts() {
		this.confirmationService.confirm({
			message: 'Are you sure you want to delete the selected products?',
			header: 'Confirm',
			icon: 'pi pi-exclamation-triangle',
			accept: () => {
				this.districts = this.districts.filter(val => !this.selectedDistricts.includes(val));
				this.selectedDistricts = null;
				this.messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Products Deleted',
					life: 3000
				});
			}
		});
	}

	editProduct(district: Lookup) {
		this.district = { ...district };
		this.districtsDialog = true;
	}

	deleteProduct(city: Lookup) {
		this.confirmationService.confirm({
			message: 'Are you sure you want to delete ' + city.NameEn + '?',
			header: 'Confirm',
			icon: 'pi pi-exclamation-triangle',
			accept: () => {
				this.districts = this.districts.filter(val => val.Id !== city.Id);
				this.district = null;
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
		this.districtsDialog = false;
		this.submitted = false;
	}

	saveProduct() {
		this.submitted = true;

		if (this.district.NameEn.trim()) {
			if (this.district.Id) {
				this.districts[this.findIndexById(this.district.Id)] = this.district;
				this.messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Country Updated',
					life: 3000
				});
			} else {
				this.district.Id = this.createId();
				this.district.Image = 'product-placeholder.svg';
				this.districts.push(this.district);
				this.messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Country Created',
					life: 3000
				});
			}

			this.districts = [...this.districts];
			this.districtsDialog = false;
			this.district = null;
		}
	}
	findIndexById(id: any): number {
		let index = -1;
		for (let i = 0; i < this.districts.length; i++) {
			if (this.districts[i].Id === id) {
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



