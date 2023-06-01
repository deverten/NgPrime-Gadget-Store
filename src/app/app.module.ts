import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabViewModule } from 'primeng/tabview';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'primeng/carousel';
import { ToolbarModule } from 'primeng/toolbar';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    ScrollPanelModule,
    CarouselModule,
    ToolbarModule,
    GalleriaModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    AccordionModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
