<template>
  <div
    style="display: flex; flex-direction: column; width: 100%; height: 100%; background: #171516; color: white; font-family: Inter; font-size: 16px;"
  >
    <!-- diagonal red wedge -->
    <div
      style="position: absolute; inset: 0; background: linear-gradient(115deg, #c9272b 0%, #a81e22 42%, #171516 42.2%, #171516 100%);"
    />

    <div style="position: relative; flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0 72px;">
      <!-- wordmark row -->
      <div style="display: flex; flex-direction: row; align-items: center; gap: 16px;">
        <div
          style="width: 56px; height: 56px; border-radius: 12px; background: #f5f4f3; display: flex; align-items: center; justify-content: center;"
        >
          <div style="font-family: Anton; font-size: 26px; color: #c9272b;">PT</div>
        </div>
        <div style="font-family: Anton; font-size: 30px; letter-spacing: 1px; color: #ffffff;">
          PRO DU TUYAU
        </div>
      </div>

      <!-- kicker -->
      <div style="margin-top: 52px; font-family: Bebas Neue; font-size: 22px; letter-spacing: 5px; color: rgba(255,255,255,0.85);">
        PLOMBERIE · CHAUFFAGE · URGENCES
      </div>

      <!-- headline: each line carries its own font-family -->
      <div style="display: flex; flex-direction: column; margin-top: 14px;">
        <div style="font-family: Anton; font-size: 60px; line-height: 1.04; color: #ffffff;">
          Vos tuyaux ont
        </div>
        <div style="font-family: Anton; font-size: 60px; line-height: 1.04; color: #ffffff;">
          trouvé leur pro.
        </div>
      </div>

      <!-- CTAs -->
      <div style="margin-top: 46px; display: flex; flex-direction: row; align-items: center; gap: 14px;">
        <div
          style="background: #f5f4f3; display: flex; align-items: center; justify-content: center; padding: 14px 34px; border-radius: 999px;"
        >
          <div style="font-family: Bebas Neue; font-size: 24px; letter-spacing: 2px; color: #1a191b;">
            Prendre rendez-vous
          </div>
        </div>
        <div
          style="border: 2px solid rgba(255,255,255,0.55); display: flex; align-items: center; justify-content: center; padding: 14px 34px; border-radius: 999px;"
        >
          <div style="font-family: Bebas Neue; font-size: 24px; letter-spacing: 2px; color: #ffffff;">
            438 399 3014
          </div>
        </div>
      </div>
    </div>

    <!-- footer strip -->
    <div style="position: relative; background: #121011; display: flex; flex-direction: row; justify-content: space-between; align-items: center; padding: 22px 72px;">
      <div style="font-family: Bebas Neue; font-size: 16px; letter-spacing: 3px; color: rgba(255,255,255,0.7);">
        LAVAL · MONTRÉAL · LONGUEUIL · BROSSARD
      </div>
      <div style="font-family: Bebas Neue; font-size: 18px; letter-spacing: 2px; color: rgba(255,255,255,0.9);">
        PRODUTUYEAU.CA
      </div>
    </div>
  </div>
</template>
