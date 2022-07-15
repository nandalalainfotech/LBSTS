import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-menu",
    template: `
        <div class="menu">
            <ul class="layout-menu">
                <li
                    app-menuitem
                    *ngFor="let item of model; let i = index"
                    [item]="item"
                    [index]="i"
                    [root]="true"
                ></li>
            </ul>
        </div>
    `,
})
export class AppMenuComponent implements OnInit {
    model: any[];

    ngOnInit() {
        this.model = [
            { label: "Dashboard", icon: "pi pi-fw pi-home", routerLink: ["/"] },
            {
                label: "Settings", icon: "pi pi-fw pi-cog",
                items: [{
                    label: 'Locations',
                    icon: '',
                    items: [
                        {
                            label: 'Countries',
                            icon: '',
                            routerLink: ["/countries"]
                        },
                        {
                            label: 'Cities',
                            icon: '',
                            routerLink: ["/cities"]
                        },
                        {
                            label:'Districts',
                            icon:'',
                            routerLink:["/districts"]
                        }
                    ]
                }]
            },
        ];
    }
}
