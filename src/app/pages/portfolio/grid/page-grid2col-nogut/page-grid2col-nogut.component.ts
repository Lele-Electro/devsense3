import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-grid2col-nogut',
  templateUrl: './page-grid2col-nogut.component.html',
  styleUrls: ['./page-grid2col-nogut.component.scss']
})
export class PageGrid2colNogutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    background: "assets/images/banner/1.jpg",
    title: "Grid 2 Columns No Gap",
    currentPage: "Project-grid",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized."
  }

  projects = {
    categories: [
      {
        category: "*",
        title: "All",
        count: "12"
      },{
        category: "cat-1",
        title: "Artwork",
        count: "3"
      },{
        category: "cat-2",
        title: "Brandng",
        count: "2"
      },{
        category: "cat-3",
        title: "Mockup",
        count: "2"
      },{
        category: "cat-4",
        title: "Motion",
        count: "4"
      },{
        category: "cat-5",
        title: "Package",
        count: "1"
      }
    ],
    items: [
      {
        category: "cat-1",
        image: "assets/images/projects/land/land-1.jpg",
        title: "Photography",
        subtitle: "Graphic Studio",
        image2: "assets/images/projects/land/land-1.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/land/land-1.jpg"
      },{
        category: "cat-2",
        image: "assets/images/projects/land/land-2.jpg",
        title: "Branding",
        subtitle: "Branding, Print",
        image2: "assets/images/projects/land/land-2.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/land/land-2.jpg"
      },{
        category: "cat-3",
        image: "assets/images/projects/land/land-3.jpg",
        title: "Ui/Ux & interaction",
        subtitle: "Print, Packaging",
        image2: "assets/images/projects/land/land-3.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/land/land-3.jpg"
      },{
        category: "cat-4",
        image: "assets/images/projects/land/land-4.jpg",
        title: "Graphic design",
        subtitle: "Advetising",
        image2: "assets/images/projects/land/land-4.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/land/land-4.jpg"
      },{
        category: "cat-5",
        image: "assets/images/projects/land/land-5.jpg",
        title: "Animation & motion",
        subtitle: "Media Marketing",
        image2: "assets/images/projects/land/land-5.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/land/land-5.jpg"
      },{
        category: "cat-4",
        image: "assets/images/projects/land/land-6.jpg",
        title: "Development",
        subtitle: "Game Development",
        image2: "assets/images/projects/land/land-6.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/land/land-6.jpg"
      },{
        category: "cat-3",
        image: "assets/images/projects/land/land-7.jpg",
        title: "Web Design",
        subtitle: "Project Design",
        image2: "assets/images/projects/land/land-7.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/land/land-7.jpg"
      },{
        category: "cat-2",
        image: "assets/images/projects/land/land-8.jpg",
        title: "Web Design",
        subtitle: "Project Design",
        image2: "assets/images/projects/land/land-8.jpg",
        title2: "Energy",
        subtitle2: "Regulatory Compliance System",
        author: "someone",
        thumb: "assets/images/projects/land/land-8.jpg"
      }
    ]
  }
}
