import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-single-ver-wide',
  templateUrl: './page-single-ver-wide.component.html',
  styleUrls: ['./page-single-ver-wide.component.scss']
})
export class PageSingleVerWideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Vertical Wide",
    currentPage: "Portfolio Vertical Wide",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  portfolio = {
    images: [
      "assets/images/projects/land/land-6.jpg",
      "assets/images/projects/land/land-3.jpg",
      "assets/images/projects/land/land-7.jpg",
      "assets/images/projects/land/land-10.jpg"
    ],
    title: "Award-winning workplace solutions. australia’s leading innovator of technology in property. smarter buildings. better experiences.",
    description: "<p>Many of our projects cannot be featured in this section due to the Security levels of the space. lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa.</p><p>viverra nulla ut metus varius laoreet. Quisque rutrum. Aene imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas temp, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luts pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis fauci bus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagitis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. Donec quam felis, ultricies nec, pellen esque eu pretium sem.</p>",
    details: {
      date: "March 10, 2023",
      client: "Studio Massimo, Italy",
      category: "Design, Illustration",
      share: [
        {
          icon: "fa-behance",
          link: "https://www.behance.net/"
        },
        {
          icon: "fa-facebook",
          link: "https://www.facebook.com/"
        },
        {
          icon: "fa-twitter",
          link: "https://twitter.com/"
        },
        {
          icon: "fa-instagram",
          link: "https://www.instagram.com/"
        }
      ]
    }
  }
}
