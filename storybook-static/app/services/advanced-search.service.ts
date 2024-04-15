import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvancedSearchService {

  getSearchResult() {
    return [
      {
        "id": "1001",
        "mpm": "test mpm",
        "title_full_name": "Test Title Full Name",
        "title_type": "Full",
        "title_level": "A Level",
        "title_status": "Active",
        "primary_language": "English",
        "release_year": "2023",
        "imdb_id": "4532",
        "run_time": "2 hrs",
        "title_eidr": "test eidr",
      },
      {
        "id": "1002",
        "mpm": "test mpm",
        "title_full_name": "Test Title Full Name",
        "title_type": "Full",
        "title_level": "A Level",
        "title_status": "Active",
        "primary_language": "English",
        "release_year": "2023",
        "imdb_id": "123",
        "run_time": "2 hrs",
        "title_eidr": "test eidr",
      },
      {
        "id": "1003",
        "mpm": "test mpm",
        "title_full_name": "Test Title Full Name",
        "title_type": "Full",
        "title_level": "A Level",
        "title_status": "Active",
        "primary_language": "English",
        "release_year": "2023",
        "imdb_id": "453",
        "run_time": "2 hrs",
        "title_eidr": "test eidr",
      },
      {
        "id": "1004",
        "mpm": "test mpm",
        "title_full_name": "Test Title Full Name",
        "title_type": "Full",
        "title_level": "A Level",
        "title_status": "Active",
        "primary_language": "English",
        "release_year": "2023",
        "imdb_id": "237",
        "run_time": "2 hrs",
        "title_eidr": "test eidr",
      },
      {
        "id": "1005",
        "mpm": "test mpm",
        "title_full_name": "Test Title Full Name",
        "title_type": "Full",
        "title_level": "A Level",
        "title_status": "Active",
        "primary_language": "English",
        "release_year": "2023",
        "imdb_id": "876",
        "run_time": "2 hrs",
        "title_eidr": "test eidr",
      },
      {
        "id": "1006",
        "mpm": "test mpm",
        "title_full_name": "Test Title Full Name",
        "title_type": "Full",
        "title_level": "A Level",
        "title_status": "Active",
        "primary_language": "English",
        "release_year": "2023",
        "imdb_id": "098",
        "run_time": "2 hrs",
        "title_eidr": "test eidr",
      },
      {
        "id": "1007",
        "mpm": "test mpm",
        "title_full_name": "Test Title Full Name",
        "title_type": "Full",
        "title_level": "A Level",
        "title_status": "Active",
        "primary_language": "English",
        "release_year": "2023",
        "imdb_id": "546",
        "run_time": "2 hrs",
        "title_eidr": "test eidr",
      },
      {
        "id": "1008",
        "mpm": "test mpm",
        "title_full_name": "Test Title Full Name",
        "title_type": "Full",
        "title_level": "A Level",
        "title_status": "Active",
        "primary_language": "English",
        "release_year": "2023",
        "imdb_id": "631",
        "run_time": "2 hrs",
        "title_eidr": "test eidr",
      },
      {
        "id": "1009",
        "mpm": "test mpm",
        "title_full_name": "Test Title Full Name",
        "title_type": "Full",
        "title_level": "A Level",
        "title_status": "Active",
        "primary_language": "English",
        "release_year": "2023",
        "imdb_id": "894",
        "run_time": "2 hrs",
        "title_eidr": "test eidr",
      },
    ]
  }

  getTemplate() {
    return {
      'Template-1': {
        id: true,
        mpm: true,
        title_full_name: true,
        title_type: true,
        title_level: true,
        title_status: true,
        primary_language: true,
        release_year: true,
        imdb_id: true,
        run_time: true,
        title_eidr: true,

      },

      'Template-2': {
        id: true,
        mpm: false,
        title_full_name: true,
        title_type: false,
        title_level: true,
        title_status: true,
        primary_language: false,
        release_year: true,
        imdb_id: true,
        run_time: true,
        title_eidr: false,
      }
    }
  }


}
