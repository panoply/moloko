import { m } from 'modules';
import { LanguageName } from 'esthetic';

export type Icons = (
  | 'pane'
  | 'document'
  | 'link'
  | 'table'
  | 'plus'
  | 'check'
  | 'cross'
  | 'gears'
  | 'github'
  | 'refresh'
  | 'issue'
  | 'discord'
  | 'code'
  | 'rules'
  | 'detect'
  | 'detectoff'
)

export const file = (name: LanguageName, width = '24', height = width) => m(
  'svg'
  , {
    width,
    height,
    viewBox: '0 0 24 24'
  }
  , m.trust(
    {
      jsx: (
        '<circle cx="16" cy="15.974" r="2.5" style="fill:#00d8ff"></circle><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" style="fill:#00d8ff"/><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" style="fill:#00d8ff"/><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" style="fill:#00d8ff"/>'
      ),
      tsx: (
        '<circle cx="16" cy="15.974" r="2.5" style="fill:#007acc"></circle><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" style="fill:#007acc"/><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" style="fill:#007acc"/><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" style="fill:#007acc"/>'
      ),
      text: (
        '<path d="M22.038,2H6.375a1.755,1.755,0,0,0-1.75,1.75v24.5A1.755,1.755,0,0,0,6.375,30h19.25a1.755,1.755,0,0,0,1.75-1.75V6.856Zm.525,2.844,1.663,1.531H22.563ZM6.375,28.25V3.75H20.813V8.125h4.813V28.25Z" style="fill:#c2c2c2"/><rect x="8.125" y="15.097" width="13.076" height="1.75" style="fill:#829ec2"/><rect x="8.125" y="24.439" width="9.762" height="1.75" style="fill:#829ec2"/><rect x="8.125" y="19.763" width="15.75" height="1.75" style="fill:#829ec2"/><rect x="8.125" y="10.23" width="15.75" height="1.75" style="fill:#829ec2"></path>'
      ),
      scss: (
        '<path d="M16.171,18.7c-.481.221-1.008.509-2.063,1.088-.4.225-.818.45-1.207.662-.027-.027-.055-.061-.082-.089-2.087-2.23-5.947-3.805-5.783-6.8.061-1.091.436-3.955,7.413-7.433,5.742-2.83,10.311-2.046,11.1-.307C26.683,8.3,23.1,12.913,17.17,13.582a4.469,4.469,0,0,1-3.751-.948c-.314-.341-.361-.361-.477-.293-.191.1-.068.409,0,.586a3.5,3.5,0,0,0,2.141,1.684,11.4,11.4,0,0,0,6.956-.689c3.594-1.391,6.4-5.258,5.578-8.5-.825-3.287-6.281-4.371-11.443-2.537a26,26,0,0,0-8.79,5.047c-2.844,2.66-3.294,4.972-3.11,5.94.662,3.437,5.4,5.674,7.3,7.331-.1.055-.184.1-.259.143-.948.471-4.562,2.36-5.463,4.358-1.023,2.264.164,3.887.948,4.105a5.832,5.832,0,0,0,6.281-2.544,6.3,6.3,0,0,0,.559-5.8,5.03,5.03,0,0,1,.716-.477c.484-.286.945-.568,1.354-.786l0,0a10.475,10.475,0,0,1,4.475-.989c3.246.382,3.887,2.407,3.764,3.26a2.157,2.157,0,0,1-1.03,1.459c-.225.143-.3.191-.28.293.027.15.136.143.327.116a2.535,2.535,0,0,0,1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753,7.753,0,0,0-2.946.587q-.225.093-.437.2Zm-4.825,7.839c-1.078,1.173-2.578,1.616-3.226,1.241-.7-.4-.423-2.135.9-3.376a17.18,17.18,0,0,1,2.53-1.889c.157-.1.389-.232.668-.4.048-.027.075-.041.075-.041l.164-.1A4.658,4.658,0,0,1,11.346,26.539Z" style="fill:#cd6799"></path>'
      ),
      css: (
        '<polygon points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#1572b6"/></polygon><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#33a9dc"></polygon><polygon points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191" style="fill:#fff"></polygon><polygon points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218" style="fill:#ebebeb"></polygon><polygon points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151" style="fill:#fff"></polygon><polygon points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935" style="fill:#ebebeb"></polygon><polygon points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191" style="fill:#ebebeb"></polygon>'
      ),
      html: (
        '<polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#e44f26"/><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#f1662a"/><polygon points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407" style="fill:#ebebeb"/><polygon points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434" style="fill:#ebebeb"/><polygon points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407" style="fill:#fff"/><polygon points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151" style="fill:#fff"/>'
      ),
      liquid: (
        '<path d="M29.988,22.372l-.748.048a5.209,5.209,0,0,1-2.99-.671,7.8,7.8,0,0,0-7.8,0,5.275,5.275,0,0,1-5.3.01A7.262,7.262,0,0,0,9.263,20.7a7.229,7.229,0,0,0-3.94,1.06,4.751,4.751,0,0,1-2.47.7l-.838,0c0,.889-.009,1.739-.015,2.515l.861,0a7.237,7.237,0,0,0,3.75-1.052,4.763,4.763,0,0,1,2.659-.7,4.835,4.835,0,0,1,2.634.718,7.794,7.794,0,0,0,7.8,0,5.287,5.287,0,0,1,5.319,0,7.709,7.709,0,0,0,4.4.989L30,24.888C29.995,24.1,29.991,23.249,29.988,22.372Z" style="fill:#004999"></path><path d="M29.983,15.581l-.743.047a5.226,5.226,0,0,1-2.99-.671,7.8,7.8,0,0,0-7.8,0,5.278,5.278,0,0,1-5.3.01A7.312,7.312,0,0,0,9.263,13.91a7.3,7.3,0,0,0-3.941,1.06,4.742,4.742,0,0,1-2.469.7l-.828,0c0,.849,0,1.693,0,2.515l.84,0a7.237,7.237,0,0,0,3.75-1.052,4.7,4.7,0,0,1,2.659-.7,4.8,4.8,0,0,1,2.634.718,7.794,7.794,0,0,0,7.8,0,5.287,5.287,0,0,1,5.319,0,7.709,7.709,0,0,0,4.4.989l.568-.037C29.983,17.269,29.983,16.424,29.983,15.581Z" style="fill:#004999"></path><path d="M29.24,9.137a5.254,5.254,0,0,1-2.99-.671,7.8,7.8,0,0,0-7.8,0,5.275,5.275,0,0,1-5.3.009A7.16,7.16,0,0,0,9.263,7.42a7.159,7.159,0,0,0-3.94,1.059,4.738,4.738,0,0,1-2.469.7l-.834,0c0,.82,0,1.664,0,2.517l.836,0a7.237,7.237,0,0,0,3.75-1.052,4.738,4.738,0,0,1,2.659-.706,4.814,4.814,0,0,1,2.634.719,7.791,7.791,0,0,0,7.8,0,5.293,5.293,0,0,1,5.319,0,7.732,7.732,0,0,0,4.4.988l.568-.037c0-.859,0-1.7.007-2.516Z" style="fill:#004999"></path>'
      ),
      markdown: (
        '<rect x="2.5" y="7.955" width="27" height="16.091" style="fill:none;stroke:#755838"/><polygon points="5.909 20.636 5.909 11.364 8.636 11.364 11.364 14.773 14.091 11.364 16.818 11.364 16.818 20.636 14.091 20.636 14.091 15.318 11.364 18.727 8.636 15.318 8.636 20.636 5.909 20.636" style="fill:#755838"/><polygon points="22.955 20.636 18.864 16.136 21.591 16.136 21.591 11.364 24.318 11.364 24.318 16.136 27.045 16.136 22.955 20.636" style="fill:#755838"/>'
      ),
      javascript: (
        '<path d="M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z" style="fill:#f5de19"></path>'
      ),
      json: (
        '<path d="M4.014,14.976a2.51,2.51,0,0,0,1.567-.518A2.377,2.377,0,0,0,6.386,13.1,15.261,15.261,0,0,0,6.6,10.156q.012-2.085.075-2.747a5.236,5.236,0,0,1,.418-1.686,3.025,3.025,0,0,1,.755-1.018A3.046,3.046,0,0,1,9,4.125,6.762,6.762,0,0,1,10.544,4h.7V5.96h-.387a2.338,2.338,0,0,0-1.723.468A3.4,3.4,0,0,0,8.709,8.52a36.054,36.054,0,0,1-.137,4.133,4.734,4.734,0,0,1-.768,2.06A4.567,4.567,0,0,1,6.1,16a3.809,3.809,0,0,1,1.992,1.754,8.861,8.861,0,0,1,.618,3.865q0,2.435.05,2.9A1.755,1.755,0,0,0,9.264,25.7a2.639,2.639,0,0,0,1.592.337h.387V28h-.7a5.655,5.655,0,0,1-1.773-.2,2.97,2.97,0,0,1-1.324-.93,3.353,3.353,0,0,1-.681-1.63A24.175,24.175,0,0,1,6.6,22.006,16.469,16.469,0,0,0,6.386,18.9a2.408,2.408,0,0,0-.805-1.361,2.489,2.489,0,0,0-1.567-.524Z" style="fill:#f5de19"/><path d="M27.986,17.011a2.489,2.489,0,0,0-1.567.524,2.408,2.408,0,0,0-.805,1.361,16.469,16.469,0,0,0-.212,3.109,24.175,24.175,0,0,1-.169,3.234,3.353,3.353,0,0,1-.681,1.63,2.97,2.97,0,0,1-1.324.93,5.655,5.655,0,0,1-1.773.2h-.7V26.04h.387a2.639,2.639,0,0,0,1.592-.337,1.755,1.755,0,0,0,.506-1.186q.05-.462.05-2.9a8.861,8.861,0,0,1,.618-3.865A3.809,3.809,0,0,1,25.9,16a4.567,4.567,0,0,1-1.7-1.286,4.734,4.734,0,0,1-.768-2.06,36.054,36.054,0,0,1-.137-4.133,3.4,3.4,0,0,0-.425-2.092,2.338,2.338,0,0,0-1.723-.468h-.387V4h.7A6.762,6.762,0,0,1,23,4.125a3.046,3.046,0,0,1,1.149.581,3.025,3.025,0,0,1,.755,1.018,5.236,5.236,0,0,1,.418,1.686q.062.662.075,2.747a15.261,15.261,0,0,0,.212,2.947,2.377,2.377,0,0,0,.805,1.355,2.51,2.51,0,0,0,1.567.518Z" style="fill:#f5de19"/>'
      ),
      typescript: (
        '<path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z" style="fill:#007acc"></path>'
      ),
      yaml: (
        '<path d="M2,12.218c.755,0,1.51-.008,2.264,0l.053.038Q5.7,13.638,7.078,15.014c.891-.906,1.8-1.794,2.7-2.7.053-.052.11-.113.192-.1.608,0,1.215,0,1.823,0a1.4,1.4,0,0,1,.353.019c-.7.67-1.377,1.369-2.069,2.05L5.545,18.8c-.331.324-.648.663-.989.975-.754.022-1.511.007-2.266.007,1.223-1.209,2.431-2.433,3.658-3.637C4.627,14.841,3.318,13.525,2,12.218Z" style="fill:#fbc02d"></path><path d="M12.7,12.218c.613,0,1.226,0,1.839,0q0,3.783,0,7.566c-.611,0-1.222.012-1.832-.008,0-1.664,0-3.329,0-4.994-1.6,1.607-3.209,3.2-4.811,4.8-.089.08-.166.217-.305.194-.824-.006-1.649,0-2.474,0Q8.916,16,12.7,12.218Z" style="fill:#fbc02d"></path><path d="M14.958,12.22c.47-.009.939,0,1.409,0,.836.853,1.69,1.689,2.536,2.532q1.268-1.267,2.539-2.532.7,0,1.4,0-.008,3.784,0,7.567c-.471,0-.943.006-1.414,0q.008-2.387,0-4.773c-.844.843-1.676,1.7-2.526,2.536-.856-.835-1.687-1.695-2.532-2.541,0,1.594-.006,3.188.006,4.781-.472,0-.943.005-1.415,0Q14.958,16,14.958,12.22Z" style="fill:#fbc02d"></path><path d="M23.259,12.217c.472,0,.944-.007,1.416,0q-.007,3.083,0,6.166c1.26,0,2.521,0,3.782,0,.063.006.144-.012.191.045.448.454.907.9,1.353,1.354q-3.371.007-6.741,0Q23.267,16,23.259,12.217Z" style="fill:#fbc02d"></path>'
      ),
      xml: (
        '<path d="M20.42,21.157l2.211,2.211L30,16,22.631,8.631,20.42,10.843,25.58,16Z" style="fill:#f1662a"/><path d="M11.58,10.843,9.369,8.631,2,16l7.369,7.369,2.211-2.211L6.42,16Z" style="fill:#f1662a"/><path d="M17.411,7.677l1.6.437-4.42,16.209-1.6-.437,4.42-16.209Z" style="fill:#f1662a"/>'
      )
    }[name]
  )
);

export const icon = (name: Icons, size = '24') => m(
  'svg'
  , {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }
  , m.trust(
    {
      document: (
        '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>'
      ),
      rules: (
        '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>'
      ),
      link: (
        '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>'
      ),
      pane: (
        '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>'
      ),
      table: (
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="0" y1="7" x2="9.5" y2="7"></line><line x1="0" y1="11" x2="9.5" y2="11"></line><line x1="0" y1="15" x2="9.5" y2="15"></line><line x1="0" y1="19" x2="9.5" y2="19"></line><line x1="12" y1="7" x2="21" y2="7"></line><line x1="12" y1="11" x2="21" y2="11"></line><line x1="12" y1="15" x2="21" y2="15"></line><line x1="12" y1="19" x2="21" y2="19"></line><line x1="12" y1="23" x2="21" y2="23"></line><line x1="0" y1="23" x2="9.5" y2="23"></line>'
      ),
      plus: (
        '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>'
      ),
      check: (
        '<polyline points="20 6 9 17 4 12"></polyline>'
      ),
      code: (
        '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>'
      ),
      cross: (
        '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'
      ),
      gears: (
        '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>'
      ),
      github: (
        '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>'
      ),
      refresh: (
        '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>'
      ),
      detect: (
        '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>'
      ),
      detectoff: (
        '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>'
      )
    }[name]
  )
);
