export interface client {
    page: number,
per_page: number,
total: number,
total_pages: number,
data: [
  { 
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}],
ad: {
  company:string,
  url:string,
  text: string
}
}
