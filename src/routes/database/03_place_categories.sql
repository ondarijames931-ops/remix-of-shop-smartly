create table place_categories (
    place_id uuid not null references places(id) on delete cascade,
    category_id uuid not null references categories(id) on delete cascade,
    primary key (place_id, category_id)
);