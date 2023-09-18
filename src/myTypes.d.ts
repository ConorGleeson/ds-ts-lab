export interface Friend {
    name: string;
    phone: string;
    age: number
}

export interface Colleague {
    name: String;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}   

