import { CourseLevel } from "@/enums/course-level.enum";

export interface CourseSummary {
  id: Number;
  title: string;
  courseCategoryId: number;
  duration: string;
  level: string;
  levelNumber: CourseLevel; 
  averageReviewRating: number | null;
  numberOfReviews: number | null;
  coverImageId: number | null;
  recoverStatus: string;
  slug: string;
  subTitle: string;
  isFree: boolean;
  basePrice: number;
}
