export class Movie {
  public page: number;
  public total_pages: number;
  public total_results: number;

  public id: number;
  public adult: boolean;
  public title: string;
  public overview: string;
  public poster_path: string | null;
  public release_date: string;
  public vote_average: number;
}
