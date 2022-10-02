/// <reference types="@types/google.maps" />
import User from './classes/User';
import Company from './classes/Company';
import { CustomMap } from './classes/CustomMap';

const user = new User();
const company = new Company();

const map = new CustomMap('map');
map.addMarker(user);
map.addMarker(company);
