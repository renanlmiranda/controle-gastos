export interface defaultType {
    created_at:  string;
    updated_at:  null;
    disabled_at: null;
    name:        string;
    value:       string;
    id:          number;
}

export interface JsonType {
    expenses: Array<defaultType>
}