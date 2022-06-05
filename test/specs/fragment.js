describe("Terceiro fluxo", () => {
    it("Verificar se o título da pasta é App", async () => {
        const textoTitulo = await $("android.widget.TextView").getText();
        expect(textoTitulo).toBe("App");
    });

    it("Verificar se o botão App funciona", async () => {
       await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
       const visibilidadedeBotao =  await $('android=new UiSelector().text("Fragment")className("android.widget.TextView")').isDisplayed(); //true;
       expect(visibilidadedeBotao).toBe(true);
    });

    it("Verificar se o botão Fragment funciona", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment")className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        const visibilidadedeBotao =  await $('android=new UiSelector().text("App/Fragment/Hide and Show").className("android.widget.TextView")').isDisplayed(); //true;
        expect(visibilidadedeBotao).toBe(true);
     });

     it("Verificar se acessa a Fragment funciona", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment")className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        await $("id=frag1hide").click();
        const visibilidadedeBotao =  await $('android=new UiSelector().text("SHOW").className("android.widget.Button")').isDisplayed(); //true;
        expect(visibilidadedeBotao).toBe(true);
       });

});