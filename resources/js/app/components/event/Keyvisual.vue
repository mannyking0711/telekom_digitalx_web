<template>
  <section class="keyvisual">
    <div id="video-keyvisual">
      <div id="video-container">
        <video id="video-intro" ref="video" muted="muted" autoplay="autoplay" playsinline="playsinline">
          <source src="https://telekom-digitalx-content-develop.s3.eu-central-1.amazonaws.com/DOIT_ANM07_TELEKOM_DX_COLOGNE_TEASER_02_V21-1629743081_Web6.mp4" media="all and (max-width:992px)" />
          <source src="https://telekom-digitalx-content-develop.s3.eu-central-1.amazonaws.com/DOIT_ANM07_TELEKOM_DX_COLOGNE_TEASER_02_V21-1629743081_Mobile6.mp4" />
          <!-- <source
            :src="data.video.url"
          /> -->
        </video>
      </div>
      <!--
      <div id="video-content">
        <div id="video-content-wrapper">
          <h1 v-html="getLangOfString('title')"></h1>
          <p>{{ getLangOfString('description') }}</p>
          <p><a class="btn" :href="getLangOfString('button_url')">{{ getLangOfString('button_label') }}</a></p>
        </div>
      </div>
      -->
    </div>

<!--    <div id="buttonbar" v-if="!isPageIndex()">-->
<!--      <a id="button-buehnenprogramm" :href="getLink('buehnenprogramm')">-->
<!--        <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDggNDgiIGhlaWdodD0iNDgiIHdpZHRoPSI0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgyLDAsMCwyLDAsMCkiPjxwYXRoIGQ9Ik04LjA2MCA5LjAwMCBBMy4wMDAgMy4wMDAgMCAxIDAgMTQuMDYwIDkuMDAwIEEzLjAwMCAzLjAwMCAwIDEgMCA4LjA2MCA5LjAwMCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNC4wMyw5LjUzbDQuNTMsNC41MzFhMS40MTQsMS40MTQsMCwwLDEtMiwybC00LjMtNC4zMTEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTguOTM5IDExLjEyMUwxMy4xODEgNi44OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNMTUgMTQuNUwxNSAyMC41IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMy41IDIwLjVMMTYuNSAyMC41IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik03LjAwMCAyMS4wMDAgQTcuNSAyLjUgMCAxIDAgMjIuMDAwIDIxLjAwMCBBNy41IDIuNSAwIDEgMCA3LjAwMCAyMS4wMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNMTEuNDM5IDE0TDcuNjQyIDE5Ljk4NyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNMjIsMjEsMjAuMTQxLDEuOTQ3YS41LjUsMCwwLDAtLjkyLS4yMTlMMTUuNTYxLDcuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNNC41LDIuNUEyLjIzMSwyLjIzMSwwLDAsMCw3LDVjLTEuNjE1LS4wMDYtMi40MTguODYtMi41LDIuNUEyLjIxMSwyLjIxMSwwLDAsMCwyLDUsMi4yMzIsMi4yMzIsMCwwLDAsNC41LDIuNVoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTE0LC41QTIuMjMxLDIuMjMxLDAsMCwwLDE2LjUsM2MtMS42MTUtLjAwNi0yLjQxOC44Ni0yLjUsMi41QTIuMjExLDIuMjExLDAsMCwwLDExLjUsMywyLjIzMiwyLjIzMiwwLDAsMCwxNCwuNVoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PC9nPjwvc3ZnPg==" />-->
<!--        <span>Agenda</span>-->
<!--      </a>-->
<!--      <a id="button-speaker" :href="getLink('speaker')">-->
<!--        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgaGVpZ2h0PSI0OCIgd2lkdGg9IjQ4Ij48ZyB0cmFuc2Zvcm09Im1hdHJpeCgyLDAsMCwyLDAsMCkiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTQgOS41aDEuNXY0bDQuNS00aDMuNXYtOWgtMTV2NG0tOCAxOWE4LjcxOSA4LjcxOSAwIDAgMSAuNy0zLjMyMmMuNDktLjk4MSAyLjUzOS0xLjY2MSA1LjExMS0yLjYxMy42OTUtLjI1OC41ODEtMi4wNzQuMjczLTIuNDEzYTUuMTI3IDUuMTI3IDAgMCAxLTEuMzM2LTMuOTc4QTMuMzU0IDMuMzU0IDAgMCAxIDguNSA3LjVhMy4zNTQgMy4zNTQgMCAwIDEgMy4yNTYgMy42NzQgNS4xMjcgNS4xMjcgMCAwIDEtMS4zMzYgMy45NzhjLS4zMDguMzM5LS40MjIgMi4xNTUuMjczIDIuNDEzIDIuNTcyLjk1MiA0LjYyMSAxLjYzMiA1LjExMSAyLjYxM2E4LjcxOSA4LjcxOSAwIDAgMSAuNyAzLjMyMnoiPjwvcGF0aD48cGF0aCBkPSJNMTYgNC43NWEuMjUuMjUgMCAwIDEgLjI1LjI1aDBhLjI1LjI1IDAgMCAxLS4yNS4yNWgwYS4yNS4yNSAwIDAgMS0uMjUtLjI1aDBhLjI1LjI1IDAgMCAxIC4yNS0uMjVtMCAwaDBtMy41IDBhLjI1LjI1IDAgMCAxIC4yNS4yNWgwYS4yNS4yNSAwIDAgMS0uMjUuMjVoMGEuMjUuMjUgMCAwIDEtLjI1LS4yNWgwYS4yNS4yNSAwIDAgMSAuMjUtLjI1bTAgMGgwbS03IDBhLjI1LjI1IDAgMCAwLS4yNS4yNWgwYS4yNS4yNSAwIDAgMCAuMjUuMjVoMGEuMjUuMjUgMCAwIDAgLjI1LS4yNWgwYS4yNS4yNSAwIDAgMC0uMjUtLjI1bTAgMGgwIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjwvZz48L3N2Zz4=" />-->
<!--        <span>Speaker</span>-->
<!--      </a>-->
<!--      <a id="button-brandhouses" :href="getLink('brandhouses')">-->
<!--        <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDggNDgiIGhlaWdodD0iNDgiIHdpZHRoPSI0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgyLDAsMCwyLDAsMCkiPjxwYXRoIGQ9Ik0wLjUgMjEuNUwyMy41IDIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTAuNSAxMy41TDEwLjUgOS41IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0yLjUgMTIuNzE5TDIuNSAyMS41IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik05IDIuNUwyMy41IDExLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTIxLjUgMTAuMjgxTDIxLjUgMjEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNMTguNSw4LjQwN1Y1YS41LjUsMCwwLDEsLjUtLjVoMWEuNS41LDAsMCwxLC41LjVWOS42NDEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTE5LDIxLjVhLjUuNSwwLDAsMCwuNS0uNVYxOGEuNS41LDAsMCwwLS41LS41SDEzYS41LjUsMCwwLDAtLjUuNXYzYS41LjUsMCwwLDAsLjUuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNMTYuNSAxNy41TDE2LjUgMjEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNMTMuNTAxIDExLjUwMCBBMS41MDAgMS41MDAgMCAxIDAgMTYuNTAxIDExLjUwMCBBMS41MDAgMS41MDAgMCAxIDAgMTMuNTAxIDExLjUwMCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik04LDIxLjVhLjUuNSwwLDAsMCwuNS0uNVYxN2EuNS41LDAsMCwwLS41LS41SDVhLjUuNSwwLDAsMC0uNS41djRhLjUuNSwwLDAsMCwuNS41IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMC41IDMuNDUzTDEwLjUgMjEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48L2c+PC9zdmc+" />-->
<!--        <span>Brandhouses</span>-->
<!--      </a>-->
<!--      <a id="button-telekom-marktplatz" :href="getLink('telekom-marktplatz')">-->
<!--        <img src="data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMjg4LjkwOTI3IgogICBoZWlnaHQ9IjE0MS44NjQxNCIKICAgaWQ9InN2ZzMzNjIiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuNDguNCByOTkzOSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iRGV1dHNjaGVfVGVsZWtvbS5zdmciPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTI5OTkiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iNjQwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjQ4MCIKICAgICBpZD0ibmFtZWR2aWV3Mjk5NyIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6em9vbT0iMC40NjMxMTU1NyIKICAgICBpbmtzY2FwZTpjeD0iLTExNC45NTcyNyIKICAgICBpbmtzY2FwZTpjeT0iNzAuOTMyMDYyIgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIiAvPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMzMzY0IiAvPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ0OS44ODY0MSwtNTA1LjQ2NTc4KSIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDcwOS45NzA5NCw1NzAuNzUzNTQgMjguODI0NzMsMCAwLDI4LjgyNDczIC0yOC44MjQ3MywwIHogbSAtODYuNDY5MzUsMCAyOC44MTk5LDAgMCwyOC44MjQ3MyAtMjguODE5OSwwIHogbSAtODYuNDc0MTgsMCAyOC44MjQ3MywwIDAsMjguODI0NzMgLTI4LjgyNDczLDAgeiBtIC0xOC4zNDgwNCw0Ni4yNDg2OSBjIDAsOS4xNDQxMyAxLjMzNDUyLDE1LjA3OTYzIDQuMDEzMiwxNy44MTYxMiAyLjI2NDM1LDIuMzMxOCA2LjEyMzM3LDMuNzY3NSAxMS41MzM3NCw0LjMwMjI3IDEuNjA0MzMsMC4xMzQ5NyA0LjM1NTI3LDAuMTk3MzQgOC4yMzg0LDAuMTk3MzQgbCAwLDguMDExOTUgLTY5LjQ1MywwIDAsLTguMDExOTUgYyA1LjU3ODk4LDAgOS42ODg1MywtMC4yNjQ3OSAxMi4zNDc5NiwtMC43OTk3NiA1LjM4MTQzLC0xLjEzMjE3IDguNzczMTUsLTQuMjY4NTQgMTAuMTY1NDgsLTkuNDA5MDkgMC43Mjc0OSwtMi42NjQyNSAxLjA5ODQ2LC02LjcwMTUzIDEuMDk4NDYsLTEyLjEwNzA2IGwgMCwtMTA0LjcyMzk1IGMgLTExLjc4NDI3LDAuMzMyNjMgLTIxLjAwMDY1LDQuMjM0ODIgLTI3LjY1NDAxLDExLjcxMjAxIC02LjMyMDkxLDcuMTU0MzcgLTEwLjE3NTEzLDE4LjEwNTE4IC0xMS41NzcxLDMyLjg1NzE5IGwgLTcuNTA2MDksLTEuMjk1OTggMS4zOTcxNSwtNTAuMDg1NTQgMTEyLjkwOTI5LDAgMS40MDE5Niw1MC4wODU1NCAtNy41MTU3MywxLjI5NTk4IEMgNTU2LjY4MTk1LDU0Mi4wOTUyOSA1NTIuNzk0LDUzMS4xNDQ0OCA1NDYuNDQ5LDUyMy45OTAxMSA1MzkuNzYxOTQsNTE2LjUxMjkyIDUzMC41MDIxOSw1MTIuNjEwNTQgNTE4LjY3OTM3LDUxMi4yNzgxIGwgMCwxMDQuNzIzOTUgeiBtIC02OC42NTYxLC00Ni4yNDg2OSAyOC44MjQ3MywwIDAsMjguODI0NzMgLTI4LjgyNDczLDAgeiIKICAgICAgIGlkPSJwYXRoMTA4IgogICAgICAgc3R5bGU9ImZpbGw6I2UyMDA3YTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjY2NjY2NjY3NjY2NjY2NjY3NjY2NjY2NjY2NjY3NjY2NjYyIgLz4KICA8L2c+Cjwvc3ZnPgo=" />-->
<!--        <span>Telekom Marktplatz</span>-->
<!--      </a>-->
<!--      <a id="button-side-events" :href="getLink('side-events')">-->
<!--        <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDggNDgiIGhlaWdodD0iNDgiIHdpZHRoPSI0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgyLDAsMCwyLDAsMCkiPjxwYXRoIGQ9Ik05LjI1NCA5Ljc1MCBBMi43NTAgMi43NTAgMCAxIDAgMTQuNzU0IDkuNzUwIEEyLjc1MCAyLjc1MCAwIDEgMCA5LjI1NCA5Ljc1MCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNS4zNzEsMTYuMDM4YTMuNSwzLjUsMCwwLDAtNi43MjMtLjAzMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNNi41MDQgMTguMDIyTDE3LjUwNCAxOC4wMjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTkuMDA0IDIzLjVMNy41MDQgMTguMDIyIDE2LjUwNCAxOC4wMjIgMTUuMDA0IDIzLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTEyLDIwLjI3MmEuMjUuMjUsMCwxLDAsLjI1LjI1LjI1LjI1LDAsMCwwLS4yNS0uMjVoMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNNS41LDE1LjVIMS41MDdhMSwxLDAsMCwxLTEtMVYxLjVhMSwxLDAsMCwxLDEtMUgyMi41YTEsMSwwLDAsMSwxLDF2MTNhMSwxLDAsMCwxLTEsMWgtNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48L2c+PC9zdmc+" />-->
<!--        <span>Side Events</span>-->
<!--      </a>-->
<!--    </div>-->

<!--    <div id="map-container" v-if="!isPageIndex()">-->
<!--      <div id="map"></div>-->
<!--      <div id="map-overlay">-->
<!--        <img src="/img/dx-overlay-ecke.png" />-->
<!--      </div>-->
<!--      <div id="sidebar-legend">-->
<!--        &lt;!&ndash; img src="./img/streamline-icon-question-help-square@48x48.svg" style="width: 1.5rem; height: 1.5rem;"/ &ndash;&gt;-->
<!--        <p id="sidebar-legend-inspiration">-->
<!--          <b>Inspiration Quartier</b><br />-->
<!--          Das Quartier für mitreißende Erfolgsstorys und Impulse von-->
<!--          erfolgreichen Machern der Digitalisierung.-->
<!--        </p>-->
<!--        <p id="sidebar-legend-interactive">-->
<!--          <b>Interactive Quartier</b><br />-->
<!--          Im Interactive-Quartier steht Kollaboration im Vordergrund.-->
<!--        </p>-->
<!--        <p id="sidebar-legend-future">-->
<!--          <b>Future Quartier</b><br />-->
<!--          Das Future-Quartier bietet vor allem für Start-ups und junge,-->
<!--          innovative Unternehmen eine Plattform.-->
<!--        </p>-->
<!--        <p id="sidebar-legend-disruption">-->
<!--          <b>Disruption Quartier</b><br />-->
<!--          Die radikale Veränderung von Märkten, Prozessen und Geschäftsmodellen-->
<!--          findet sich im Disruption-Quartier.-->
<!--        </p>-->
<!--      </div>-->
<!--      <div id="sidebar">-->
<!--        <div id="sidebar-close-container">-->
<!--          <a id="sidebar-close-button" href="#close">-->
<!--            <img id="sidebar-close-icon" src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDggNDgiIGhlaWdodD0iNDgiIHdpZHRoPSI0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgyLDAsMCwyLDAsMCkiPjxwYXRoIGQ9Ik0wLjUgMC40OTlMMjMuNSAyMy40OTkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTIzLjUgMC40OTlMMC41IDIzLjQ5OSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48L2c+PC9zdmc+" />-->
<!--          </a>-->
<!--        </div>-->
<!--        <div id="sidebar-location-content">-->
<!--          <img id="sidebar-location-image" src="/img/app/keyvisual/location-demo_1.jpeg" />-->
<!--          <h3 id="sidebar-location-name">Lorem Ipsum</h3>-->
<!--          <p>-->
<!--            <span id="sidebar-location-category"></span><br />-->
<!--            <span id="sidebar-location-block"></span>-->
<!--          </p>-->
<!--          <p id="sidebar-location-description">-->
<!--            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita-->
<!--            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit-->
<!--            amet...-->
<!--          </p>-->
<!--          <p>-->
<!--            <a href="#" class="btn" id="sidebar-location-link">Mehr erfahren</a>-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div id="lightbox-background"></div>-->
<!--      <div id="lightbox-container">-->
<!--        <div id="lightbox-content">-->
<!--          <div id="lightbox-close-container">-->
<!--            <a id="lightbox-close" href="#close">-->
<!--              <svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M0.5 0.499L23.5 23.499" fill="none" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.5 0.499L0.5 23.499" fill="none" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>-->
<!--            </a>-->
<!--          </div>-->
<!--          <div id="brandhouse-container">-->
<!--            <div class="brandhouse-column">-->
<!--              <h3>Wichtige Information zur Akkreditierung vor Ort:</h3>-->
<!--              <p>-->
<!--                Für Ihre Akkreditierung besuchen Sie bitte einen der zahlreichen Check In-Points. Halten Sie dazu Ihr Ticket und <strong>Ihr negatives Corona-Schnelltestergebnis bereit</strong>. Nach erfolgreicher Überprüfung erhalten Sie Ihr individuelles Veranstaltungs-Badge und haben ganztägig Zutritt zu allen Locations, Bühnen und Brandhouses der DIGITAL X.-->
<!--              </p>-->
<!--              <p>-->
<!--                Es wird empfohlen, bereits mit negativem Testergebnis (nicht älter als 24 Stunden) anzureisen. Sollten Sie dazu nicht die Möglichkeit haben, stehen in allen vier Quartieren DIGITAL X-Testzentren bereit, in denen Sie sich kostenlos testen lassen können. Die genauen Standorte der Testzentren können Sie der Kartenansicht unter folgenden Symbolen entnehmen:-->
<!--              </p>-->
<!--              <p>-->
<!--                  <svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,.574a11.38,11.38,0,0,1,6.112,1.77c4.75,3.011,5.1,9.23,1.315,13.777a59.3,59.3,0,0,1-7.106,7.188.5.5,0,0,1-.642,0,59.333,59.333,0,0,1-7.106-7.189C.789,11.574,1.138,5.355,5.888,2.344A11.38,11.38,0,0,1,12,.574Z" fill="#E6007E" stroke="#ce0272" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M7.000 6.574 L17.000 6.574 L17.000 14.574 L7.000 14.574 Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14,6.574v-1a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9.074L12 12.074" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 10.574L13.5 10.574" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>-->
<!--                      &#160;&#160;-->
<!--                  <svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,.574a11.38,11.38,0,0,1,6.112,1.77c4.75,3.011,5.1,9.23,1.315,13.777a59.3,59.3,0,0,1-7.106,7.188.5.5,0,0,1-.642,0,59.333,59.333,0,0,1-7.106-7.189C.789,11.574,1.138,5.355,5.888,2.344A11.38,11.38,0,0,1,12,.574Z" fill="#FFDE14" stroke="#d5a113" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M7.000 6.574 L17.000 6.574 L17.000 14.574 L7.000 14.574 Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14,6.574v-1a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9.074L12 12.074" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 10.574L13.5 10.574" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>-->
<!--                      &#160;&#160;-->
<!--                  <svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,.574a11.38,11.38,0,0,1,6.112,1.77c4.75,3.011,5.1,9.23,1.315,13.777a59.3,59.3,0,0,1-7.106,7.188.5.5,0,0,1-.642,0,59.333,59.333,0,0,1-7.106-7.189C.789,11.574,1.138,5.355,5.888,2.344A11.38,11.38,0,0,1,12,.574Z" fill="#39A935" stroke="#94c234" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M7.000 6.574 L17.000 6.574 L17.000 14.574 L7.000 14.574 Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14,6.574v-1a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9.074L12 12.074" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 10.574L13.5 10.574" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>-->
<!--                      &#160;&#160;-->
<!--                  <svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,.574a11.38,11.38,0,0,1,6.112,1.77c4.75,3.011,5.1,9.23,1.315,13.777a59.3,59.3,0,0,1-7.106,7.188.5.5,0,0,1-.642,0,59.333,59.333,0,0,1-7.106-7.189C.789,11.574,1.138,5.355,5.888,2.344A11.38,11.38,0,0,1,12,.574Z" fill="#4CB4E7" stroke="#31a8ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M7.000 6.574 L17.000 6.574 L17.000 14.574 L7.000 14.574 Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14,6.574v-1a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9.074L12 12.074" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 10.574L13.5 10.574" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>-->
<!--              </p>-->
<!--              <p><b>ALLE VERANSTALTUNGSTEILNEHMER – AUCH GEIMPFTE UND GENESENE – MÜSSEN AN BEIDEN VERANSTALTUNGSTAGEN EINEN NEGATIVEN CORONA-TEST VORWEISEN, DER NICHT ÄLTER SEIN DARF ALS 24 STUNDEN.</b></p>-->
<!--              <a id="lightbox-btn-close">Schließen</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </section>
</template>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<script>
import { mapGetters } from 'vuex'
// import Keyvisual from '../../../components/keyvisual/keyvisual'

export default {
  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'Keyvisual',

  props: {
    data: Object,
  },

  data() {
    return {
    }
  },

  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {},

  mounted() {
    this.initKeyVisual();

    this.$store.commit('setKeyvisualLoadedCount')
    this.$refs.video.addEventListener('ended', this.scrollVideo, false);
  },

  beforeDestroy() {
    this.$refs.video.removeEventListener('ended', this.scrollVideo);
  },

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    initKeyVisual() {
      if (this.isPageIndex()) {
        return;
      }

      // if (!this.getIsKeyvisualLoaded) {
      //   // const key = 'AIzaSyAehMEaVXtuA-WaIWIS3HNIn7RH3CYZ7Wk';
      //   //
      //   // // Create the script tag, set the appropriate attributes
      //   // var script = document.createElement('script')
      //   // script.src = 'https://maps.googleapis.com/maps/api/js?key=' + key + '&callback=initMap&libraries=&v=weekly'
      //   // script.async = true
      //   //
      //   // // Attach your callback function to the `window` object
      //   // window.initMap = function() {
      //   //   // JS API is loaded and available
      //   //   Keyvisual();
      //   // }
      //   //
      //   // // Append the 'script' element to 'head'
      //   // document.head.appendChild(script)
      //
      //   this.$store.commit('setIsKeyvisualLoaded', true)
      // }
      // else {
      //   Keyvisual();
      // }
    },
    // scroll to map on video ended
    scrollVideo() {
      let topDistance = (window.innerWidth < 961) ? 0 : 45;
      let scrollPosition = this.$refs.video.offsetHeight + topDistance;

      // only scroll if the video is still visible
      // not if the user is already further down the page
      if (window.scrollY < scrollPosition) {
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
      }
    },

    // get correct lang variable out of string
    getLangOfString(stringVar) {
      if (!this.alphaNumericOnly(stringVar)) {
        return false
      }

      const interpretedString = eval(`this.data.${stringVar + this.langType()}`)

      return interpretedString === undefined ? '' : interpretedString
    },

    alphaNumericOnly(aString) {
      if (!aString.match(/^[0-9a-zA-Z_]+$/)) {
        console.log('ERROR - field naming should be alpha numeric only')
        return false
      }

      return true
    },

    langType() {
      return this.$i18n.locale === 'de' ? '_de' : '_en'
    },

    isPageIndex() {
      return (this.$route.name == 'de.index' || this.$route.name == 'en.index');
    },

    getLink(target) {
      switch (target) {
        case 'speaker':
          return this.$router.resolve(this.makelink('events.detail', {slug: 'digital-x-2021'})).href+'/speaker';
        case 'side-events':
          return (this.isPageIndex()) ? this.$router.resolve(this.makelink('events.detail', {slug: 'digital-x-2021'})).href+'#eventslider' : '#eventslider';
        case 'telekom-marktplatz':
          return '/de/partner/telekom-marktplatz'
        case 'brandhouses':
          return (this.isPageIndex()) ? this.$router.resolve(this.makelink('events.detail', {slug: 'digital-x-2021'})).href+'#eventpartner' : '#eventpartner';
        case 'buehnenprogramm':
          return this.$router.resolve(this.makelink('events.detail', {slug: 'digital-x-2021'})).href+'/agenda';
        default:
          '#';
      }
    },
    makelink(name, params = {}) {
      let to = { name, params };

      to.params.lang = this.$i18n.locale;
      to.name = to.params.lang + '.' + to.name;

      return to;
    },
  },

  /////////////////////////////////
  // COMPUTED
  /////////////////////////////////

  computed: {
    ...mapGetters(['getIsKeyvisualLoaded', 'getKeyvisualLoadedCount']),
  },
}
</script>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<style lang="scss"></style>

<style lang="scss" scoped></style>
