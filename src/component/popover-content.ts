export const popoverContent = (content: string) => {
  return ` <div class="w-96 rounded-md border border-solid border-gray-400 bg-white shadow ">
  <div class="flex items-center gap-3 border-b border-solid px-4 py-3">
    <img src="https://i.postimg.cc/gjNmTL1C/logo-icon.png" class="w-9" />
    <h1 class=" text-lg font-medium text-slate-800">Code-Xplain</h1>
  </div>
  <div class="px-4 py-3">
  ${content}
  </div>
</div>`;
};
