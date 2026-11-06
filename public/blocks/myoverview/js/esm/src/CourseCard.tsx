// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * My courses card, rendered with the design system CourseCard.
 *
 * @module     block_myoverview/CourseCard
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import { use } from "react";
import { CourseCard as MdsCourseCard } from "@moodlehq/design-system";
import { getString } from "@moodle/lms/core/stringUtils";

/** Props as provided by the block_myoverview/view-cards template (course_summary_exporter fields). */
export interface CourseCardProps {
  id: number;
  /** format_string() output: HTML-escaped, so it must be decoded before React renders it. */
  fullname: string;
  viewurl: string;
  courseimage?: string;
  coursecategory?: string;
  showcoursecategory?: boolean;
  hasprogress?: boolean;
  progress?: number;
  hidden?: boolean;
}

/**
 * Turn Moodle's escaped HTML text ("Art &amp; Design") back into plain text ("Art & Design").
 * DOMParser never runs scripts, so this is safe; React escapes the result again when rendering.
 */
const decodeHtml = (html: string): string =>
  new DOMParser().parseFromString(html, "text/html").documentElement
    .textContent ?? "";

export default function CourseCard({
  id,
  fullname,
  viewurl,
  courseimage,
  coursecategory,
  showcoursecategory = false,
  hasprogress = false,
  progress = 0,
  hidden = false,
}: CourseCardProps) {
  const percent = Math.floor(progress);
  const progressLabel = use(
    getString("completepercent", "block_myoverview", percent),
  );
  const hiddenLabel = use(getString("hiddenfromstudents", "core"));
  const linkLabel = use(getString("continue", "core"));

  return (
    <MdsCourseCard
      data-course-id={id}
      className="w-100"
      title={decodeHtml(fullname)}
      subtitle={
        showcoursecategory && coursecategory
          ? decodeHtml(coursecategory)
          : undefined
      }
      imageSrc={courseimage || undefined}
      badgeLabel={hidden ? hiddenLabel : undefined}
      progressLabel={hasprogress ? progressLabel : undefined}
      progressValue={percent}
      linkLabel={linkLabel}
      linkHref={viewurl}
    />
  );
}
