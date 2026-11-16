# PeabodySTEAMday2027
George Peabody Elementary 2027 STEAM Day

## Website

STEAM Day is Wednesday, February 17, 2027. The site is a responsive, static website with no installation or build step.

- **Home:** the 30-second 2026 highlight video, prepared for web playback, plus links into the 2027 event.
- **About:** the supplied Google Slides presentation, with a direct link if the embedded viewer requires sign-in.
- **Schedule:** 42 K–2 draft schedule entries, filterable by grade, home classroom, and session/time. Each entry shows the activity destination. Grades 3–5 have not yet been provided.
- **Volunteer:** 22 role groups from the supplied sign-up sheet, filterable by grade, role, activity location, and session/time. Sign-ups happen in the linked Google Sheet. Counts are a planning snapshot, not live availability.
- **Activity ideas:** eight suggested activities with subject filters, materials, instructions, and discussion prompts. These are inspiration, not confirmed event stations.

The original Peabody logo is used throughout. Pages adapt to phones, tablets, and desktop screens. The home video has native playback, audio, and fullscreen controls; it does not autoplay.

## Preview

Open `index.html` in a browser. All site navigation, filters, images, and video are local files. The embedded Google presentation and Google Sheet links need internet access and may require an authorized Google account.

For a local web server, run this in the repository folder, then visit the displayed address:

```sh
python3 -m http.server 8000
```

## Publish with GitHub Pages

1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/ (root)**, then **Save**.
4. GitHub will display the website address once deployment completes.

No Google permissions are changed by this website. The slide deck, schedule sheet, and volunteer sign-up sheet retain their existing access settings.

## Updating content

- Update page text directly in the corresponding HTML file.
- Schedule cards are in `schedule.html`. Update their `data-grade`, `data-room`, and `data-session` attributes along with the displayed text so filters remain accurate. `schedule-data.json` is a companion copy of the schedule data; the current pages do not fetch it at runtime.
- Volunteer role cards are in `volunteer.html`. Change their displayed counts and filter attributes when assignments change. Only the K–2 Math Festival has confirmed session information in the supplied draft; other locations and times are marked to be arranged.
- Update the Google links in `about.html`, `schedule.html`, and `volunteer.html` if the source documents change.
- Replace `assets/steam-day-2026.mp4` to change the home video; update its description and poster as needed.

## Validation

Checked at mobile (390px) and desktop (1440px) widths: all five pages, local assets, horizontal overflow, combined schedule filters, classroom rotation, no-results messages, reset controls, volunteer filters, activity filters, and mobile menu/keyboard behavior.
