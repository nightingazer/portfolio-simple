import { Component, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationEnd, Router, RouterOutlet } from '@angular/router'
import { Subscription, filter } from 'rxjs'
import { HeaderComponent } from './component/header/header.component'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, HeaderComponent],
})
export class AppComponent {
    title = 'portfolio-simple'

    routerSubscription: Subscription;

    constructor(private router: Router) {
        this.routerSubscription = this.router.events
            .pipe(filter((item) => item instanceof NavigationEnd))
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    console.log(event.url !== '/')
                    this.isHeaderVisible.set(event.url !== '/')
                }
            })
    }

    ngOnDestroy(): void {
        this.routerSubscription.unsubscribe()
    }

    isHeaderVisible = signal(true)

    getCopyrightYears(): string {
        const startYear = 2023
        const currentYear = new Date().getFullYear()
        return startYear === currentYear
            ? `${startYear}`
            : `${startYear} - ${currentYear}`
    }
}
