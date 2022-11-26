import { University } from "../models/Dashboard/University";
const address = "167.99.245.151";

export function getUniversities(
  pageSize: number,
  page: number,
  country: string,
  city: string
) {
  return [
    {
      name: "UPT",
      city: "",
    },
  ];
}

export function updateUniversity(universityId: number, newModel: University) {}

export function deleteUniversity(universityId: number) {}

export function getFaculties(
  pageSize: number,
  page: number,
  universityId: number,
  numberOfYears: number
) {}

// update delete

export function getSpecializations(
  pageSize: number,
  page: number,
  facultyId: number,
  domain: string
) {}

// update delete

export function getCourses(
  pageSize: number,
  page: number,
  specializationId: number,
  year: number,
  semester: number,
  optional: boolean
) {}

// update delete
