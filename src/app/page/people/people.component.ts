import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatRadioButton, MatRadioChange, MatRadioGroup } from '@angular/material/radio';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, Subscription } from 'rxjs';
import { People } from 'src/app/interface/people';
import { PeopleService } from 'src/app/service/people.service';

const enum Filters{
  name = 'name',
  connected = 'connected',
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatRadioButton, { static: true }) radioButton!: MatRadioButton;
  private subs = new Subscription();
  public dataSource!: MatTableDataSource<People>;
  private dataArray: any;
  public displayedColumns = ['lastname', 'lastConnection'];
  public alreadyConnected = true;
  public neverConnected = true;
  constructor(public peopleService: PeopleService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.subs.add(this.peopleService.getPeople().subscribe(res => {
      this.dataArray = res;
      this.dataSource = new MatTableDataSource<People>(this.dataArray);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate =
        (data: People, filter: string) => {
          console.log('filter:', filter)
          if(filter === Filters.connected){
            if (this.alreadyConnected && !this.neverConnected) {
              return data.lastConnection !== undefined;
            }
            if (this.neverConnected && !this.alreadyConnected) {
              return data.lastConnection === undefined;
            }
            if(this.alreadyConnected && this.neverConnected){
              return true
            } else {
              return false
            }            
          } else {
            return data.lastname.toLowerCase().includes(filter.toLowerCase()) || data.firstname.toLowerCase().includes(filter.toLowerCase());
          }
        };
    }))
  }

  applyNameFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterConnected(change: MatCheckboxChange) {
    if(change.source.value === 'alreadyConnected'){
      this.alreadyConnected = change.checked
    }
    if(change.source.value === 'neverConnected'){
      this.neverConnected = change.checked
    }
    this.dataSource.filter = Filters.connected;
  }
}
