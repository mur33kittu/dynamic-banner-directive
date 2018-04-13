import { Injectable } from '@angular/core';

import { AdItem } from './ad-item';
import { JobAdComponent } from './jobad.component';
import { OtherAdComponent } from './OtherAd.component';

@Injectable()
export class AdService {
    getAds() {
        return [
            new AdItem(OtherAdComponent, { name: 'Bombasto', bio: 'Brave as they come' }),

            new AdItem(OtherAdComponent, { name: 'Dr IQ', bio: 'Smart as they come' }),

            new AdItem(JobAdComponent, {
                headline: 'Hiring for several positions',
                body: 'Submit your resume today!'
            }),

            new AdItem(JobAdComponent, {
                headline: 'Openings in all departments',
                body: 'Apply today'
            }),
        ];
    }
}