<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep NOIRE as a single-page, anchor-navigated marketing experience; this preserves its cinematic narrative and direct conversion flow.
- Store all public enquiries through validated server functions in the private lead_submissions table; this prevents exposing lead data to anonymous visitors.
- Keep lead form UI submission-provider agnostic through a client adapter with an optional public endpoint and the existing server fallback; this preserves independent deployment portability.
- Keep heavy cinematic rendering behind the central disabled-by-default feature flag and dynamically loaded; this protects baseline performance while preserving a launch-ready WebGL layer.
