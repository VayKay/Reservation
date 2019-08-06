import { underscoredIf } from "sequelize/types/lib/utils";
import { UV_UDP_REUSEADDR } from "constants";
import { DATEONLY, INTEGER } from "sequelize/types";

CREATE TABLE reservation (
    max_guests INTEGER,
    cleaning_fee INTEGER,
    local_tax decimal(10,2),
    min_stay INTEGER,
    base_rate decimal(10,2),
    extra_guest_cap INTEGER,
    extra_guest_charge,
    currency varchar(5),
    star_rating decimal(10,1),
    review_count INTEGER,
    data DATEONLY,
    custom_rates decimal(10,1),
    listing_id INTEGER,
    room_id INTEGER,
    Rooms INTEGER,
    PRIMARY KEY (listing_id)
)

