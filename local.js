let isTimelineVN = localStorage.getItem('timelineIs') == 'VN'
let themeMode = localStorage.getItem('themeMode') === 'lightmode'

const themeIcon = document.getElementById('selectTheme');
const darkmodeThemeIcon = `<div class="darkmode-icon"></div>`;
const lightmodeThemeIcon = `<div class="lightmode-icon"></div>`;
themeIcon.innerHTML = themeMode ? darkmodeThemeIcon : lightmodeThemeIcon;

const iconButton = document.getElementById('selectTimeline')
const vietnamFlagIcon = `<div class="country-flag"><img src="vietnam-flag.png" class="image-fullsize"></div>`
const americaFlagIcon = `<div class="country-flag"><img src="america-flag.png" class="image-fullsize"></div>`
iconButton.innerHTML = isTimelineVN ? americaFlagIcon : vietnamFlagIcon

setInterval(() =>
{
    const textLabel = isTimelineVN ? 'Asia/HoChiMinh' : 'America/Denver'
    const textTime = isTimelineVN ? 'Asia/Ho_Chi_Minh' : 'America/Denver'

    const time = new Date().toLocaleString('en-US', 
    {
        timeZone: textTime,
        hour12: false, 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })

    document.title = isTimelineVN ? ('VN - ' + time) : ('USA - ' + time)
    document.getElementById('timeZoneLabel').textContent = textLabel
    document.getElementById('timeDisplay').textContent = time
    applyTheme()
})

document.getElementById('selectTimeline').addEventListener('click', () =>
{
    isTimelineVN = !isTimelineVN
    localStorage.setItem('timelineIs', isTimelineVN ? 'VN' : 'USA')
    iconButton.innerHTML = isTimelineVN ? americaFlagIcon : vietnamFlagIcon
    console.log(isTimelineVN ? 'Is VN Timeline' : 'Is USA Timeline')
})

document.getElementById('selectTheme').addEventListener('click', () =>
{
    themeMode = !themeMode
    themeIcon.innerHTML = themeMode ? darkmodeThemeIcon : lightmodeThemeIcon;
    localStorage.setItem('themeMode', themeMode ? 'lightmode' : 'darkmode')
    applyTheme()

    console.log('Lightmode -', themeMode, '-', themeIcon.innerHTML)
})

function applyTheme()
{
    ['fontcolor-1', 'backgroundcolor-1', 'backgroundcolor-2', 'backgroundcolor-3', 'backgroundcolor-4']
    .forEach((i) => document.body.style.setProperty(`--${i}`, `var(--${localStorage.getItem('themeMode')}-${i})`))
}