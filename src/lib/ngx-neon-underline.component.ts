import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "om-neon-underline",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-neon-underline.component.html",
  styleUrl: "./ngx-neon-underline.component.scss",
})
export class NgxNeonUnderlineComponent {
  @Input("styleClass")
  styleClass?: string;

  @Input("middleColor")
  set shimmerColor(color: string) {
    this.style["--om-neon-underline-middle-color"] = color;
  }

  @Input("sideColor")
  set textColor(color: string) {
    this.style["--om-neon-underline-side-color"] = color;
  }

  @Input("width")
  set shimmerWidth(width: string) {
    this.style["--om-neon-underline-width"] = width;
  }

  style: any = {};
}
